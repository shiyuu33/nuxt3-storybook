<script setup lang="ts">
onMounted(async () => {
    const data = await $fetch("/api/hello");
    console.log(data)
})
</script>
<template>
    <p>hello top</p>
    <router-link to="/member">member</router-link>
</template>