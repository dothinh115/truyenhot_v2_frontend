<template>
  <div>{{ user?.email ?? "Chưa đăng nhập" }}</div>
  <div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuth();

async function handleClick() {
  const { data } = await useClientFetch<{ data: TUser }>("me");
  console.log(data.value?.data);
}

definePageMeta({
  middleware: "auth",
});
</script>
