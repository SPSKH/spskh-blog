<script setup lang="ts">
const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}]
</script>

<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>