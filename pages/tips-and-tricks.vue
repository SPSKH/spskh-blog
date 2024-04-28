<script setup lang="ts">
useSeoMeta({
    title: 'Blog SPŠ Kutná Hora - Tips&Tricks',
    ogTitle: 'Blog SPŠ Kutná Hora - Tips&Tricks',
})

const toast = useToast()
</script>

<template>
    <main class="mt-16 xl:mt-32">
        <div class="flex justify-center mb-6">
            <UBadge color="primary" variant="subtle" class="text-center">Studentský blog plný zajímavých článků o IT z průmyslovky Kutná
                Hora!</UBadge>
        </div>
        <h1>Tips&Tricks</h1>
        <div class="flex max-xl:flex-col justify-center gap-6 mt-6">
            <UButton class="flex justify-center" @click="toast.add({ title: 'Přešel jsi na domovskou stránku!' })" to="/"
                label="Přejít na domovskou stránku" color="primary" />
            <UButton class="flex justify-center" @click="toast.add({ title: 'Přešel jsi na stránku studentské projekty!' })" to="/projects"
                label="Přejít na stránku se studentskými projekty" color="primary" />
        </div>
        <ContentList path="/tips-and-tricks" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <NuxtLink :to="`${article._path}`">
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
                                <ULink :to="`${article._path}`" active-class="text-primary"
                                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                    Přečíst článek
                                </ULink>
                            </div>
                        </template>
                    </UCard>
                </NuxtLink>
            </div>
        </ContentList>
    </main>
</template>
