<template>
  <div class="p-4">
    <div><span>Fetch từ phía server: </span>{{ user?.email }}</div>
    <div>
      <button
        class="p-1 rouned-lg bg-slate-500 text-white"
        @click="handleClick"
      >
        click
      </button>
    </div>
    <div>
      <span>Fetch từ client: </span>
      {{ clientUser?.email }}
      <span class="spinner" v-if="loading"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuth();
const { loading, startLoading, finishLoading } = useLoading();
const clientUser = ref<TUser | undefined>(undefined);

async function handleClick() {
  startLoading();
  try {
    const { data } = await useClientFetch<{ data: TUser }>("me");
    clientUser.value = data.value?.data;
  } catch (error) {
    console.log(error);
  } finally {
    finishLoading();
  }
}

definePageMeta({
  middleware: "auth",
});
</script>
