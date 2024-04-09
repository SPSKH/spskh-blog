<script setup lang="ts">
const links = [
    {
        label: 'Domů',
        icon: 'i-heroicons-home',
        to: '/'
    },
    {
        label: 'Seznam článků',
        icon: 'i-heroicons-list-bullet',
        to: '/list'
    }
]
</script>

<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>