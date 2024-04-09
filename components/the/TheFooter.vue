<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer>
        <p>Vytvořil: <NuxtLink to="mailto:cernoch@voskh.cz">Martin Černoch</NuxtLink>
        </p>
        <!-- <UChip>
            <UButton icon="i-heroicons-inbox" color="gray" />
        </UChip> -->
        <p>{{ year }}, všechna práva vyhrazena</p>
    </footer>
</template>