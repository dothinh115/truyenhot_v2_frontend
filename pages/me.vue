<template>
  <div>{{ user?.email ?? "Chưa đăng nhập" }}</div>
</template>

<script setup lang="ts">
const { user } = useAuth();
definePageMeta({
  middleware: "auth",
});
</script>
