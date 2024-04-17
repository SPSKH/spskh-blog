<script setup lang="ts">
const links = [
    [{
        label: 'Domů',
        icon: 'i-heroicons-home',
        to: '/'
    },
    {
        label: 'Seznam článků',
        icon: 'i-heroicons-list-bullet',
        to: '/articles'
    },
    {
        label: 'Studentské projekty',
        icon: 'i-heroicons-academic-cap',
        to: '/projects'
    }],
    [{
            label: 'Web školy',
            icon: 'i-heroicons-globe-alt',
            to: 'https://www.spskh.cz'
    }]
]
</script>

<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>