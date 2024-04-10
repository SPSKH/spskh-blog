<script setup lang="ts">
useSeoMeta({
    title: 'Blog SPŠ Kutná Hora',
    ogTitle: 'Blog SPŠ Kutná Hora'
})

const toast = useToast()
</script>

<template>
    <main class="mt-32">
        <div class="flex justify-center mb-6">
            <UBadge color="primary" variant="subtle">Studentský blog plný zajímavých článků o IT z průmyslovky Kutná
                Hora!</UBadge>
        </div>
        <h1>Blog SPŠ Kutná Hora</h1>
        <div class="flex justify-center">
            <p class="black-text max-w-[840px] text-center my-4">Naše průmyslová škola je centrem inovací a
                technologického pokroku
                v regionu, a prostřednictvím našeho blogu vám přinášíme nejnovější informace, tipy a trendy ze světa
                informačních technologií. Připojte se k nám a objevujte společně s námi fascinující svět IT z pohledu
                našich studentů z Kutné Hory.
            </p>
        </div>
        <div class="flex gap-6 justify-center mt-6">
            <UButton @click="toast.add({ title: 'Přešel jsi na stránku seznam článků!' })" to="/articles"
                label="Přejít na stránku se seznamem článků" color="primary" />
            <UButton @click="toast.add({ title: 'Přešel jsi na stránku studentské projekty!' })" to="/projects"
                label="Přejít na stránku se studentskými projekty" color="primary" />
        </div>
    </main>
</template>