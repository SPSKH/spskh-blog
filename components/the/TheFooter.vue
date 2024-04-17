<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
    { url: 'https://www.linkedin.com/school/spskh/', icon: 'linkedin' },
    { url: 'https://github.com/SPSKH/', icon: 'github' },
    { url: 'https://www.instagram.com/spskutnahora/', icon: 'instagram' },
    { url: 'https://www.facebook.com/voskh/', icon: 'facebook' },
    { url: 'https://www.youtube.com/@vosspsajskutnahora4137', icon: 'youtube' }
]
</script>

<template>
    <footer class="flex justify-between items-center mt-32">
        <div>
            <p>© {{ year }}, VOŠ, SPŠ a JŠ Kutná Hora, všechna práva vyhrazena</p>
            <p>
                Vytvořil a spravuje: <NuxtLink to="mailto:cernoch@voskh.cz">Martin Černoch</NuxtLink>
            </p>
        </div>
        <div class="flex gap-2">
            <NuxtLink v-for="item in socials" :key="item.icon" :to="item.url" target="_blank">
                <i class="fa-brands fa-2xl" :class="`fa-${item.icon}`" />
            </NuxtLink>
        </div>
    </footer>
</template>