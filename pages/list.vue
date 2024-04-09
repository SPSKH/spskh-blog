<script setup lang="ts">
useSeoMeta({
    title: 'Blog SPŠ Kutná Hora - seznam článků',
    ogTitle: 'Blog SPŠ Kutná Hora - seznam článků'
})

const toast = useToast()
</script>

<template>
    <main class="mt-32">
        <div class="flex justify-center mb-6">
            <UBadge color="primary" variant="subtle">Studentský blog plný zajímavých článků o IT z průmyslovky Kutná
                Hora!</UBadge>
        </div>
        <h1>Seznam článků</h1>
        <div class="flex justify-center">
            <UButton @click="toast.add({ title: 'Přešel jsi na domovskou stránku!' })" to="/"
                label="Přejít na domovskou stránku" color="primary" />
        </div>
        <ContentList path="/" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <template>
                    <NuxtLink :to="`${article.path}`">
                        <UCard class="mt-24">
                            <template #header>
                                <h2>{{ article.title }}</h2>
                            </template>

                            <p class="text-center">{{ article.description }}</p>

                            <template #footer>
                                <div class="flex items-center justify-between">
                                    <div class="flex gap-6 items-center">
                                        <UAvatar :src="`${article.avatar}`" alt="Avatar" />
                                        <p>{{ article.author }}</p>
                                    </div>
                                    <ULink :to="`${article.path}`" active-class="text-primary"
                                        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                        Přečíst článek
                                    </ULink>
                                </div>
                            </template>
                        </UCard>
                    </NuxtLink>
                </template>
            </div>
        </ContentList>
    </main>
</template>
