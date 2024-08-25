const paginate = (
  totalPages: number,
  currentPage: number,
  range: number
): (number | string)[] => {
  let pages: (number | string)[] = [];

  if (currentPage !== 1) pages.push(1);

  if (currentPage - range > 2) {
    pages.push("...");
  }

  const startRange = Math.max(2, currentPage - range);

  const endRange = Math.min(currentPage + range + 1, totalPages);
  for (let i = startRange; i < currentPage; i++) {
    pages.push(i);
  }
  pages.push(currentPage);

  for (let i = currentPage + 1; i < endRange; i++) {
    pages.push(i);
  }

  if (currentPage + range < totalPages && endRange < totalPages - 1) {
    pages.push("...");
  }

  if (totalPages !== 1 && totalPages !== currentPage && totalPages !== 0) {
    pages.push(totalPages);
  }

  return pages;
};

export default function usePagnate(
  obj: {
    totalPages: number;
    currentPage: number;
    range: number;
  },
  callback: Function
) {
  const pages = paginate(obj.totalPages, obj.currentPage, obj.range);
  const router = useRouter();
  const currentPage = ref(obj.currentPage);

  watch(
    currentPage,
    (newPage) => {
      if (obj.totalPages > 0) {
        if (newPage < 1) {
          router.push({
            query: {
              page: 1,
            },
          });
        } else if (newPage > obj.totalPages) {
          router.push({
            query: {
              page: obj.totalPages,
            },
          });
        }
      }
    },
    { immediate: true }
  );

  callback(pages);
}
