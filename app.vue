<template>
  <TheNav />
  <UContainer>
    <NuxtPage />
  </UContainer>

  <UNotifications />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --blue-primary: #3559c7;
  --blue-secondary: #00a3ff;
  --black: #3a3a3a;
}

* {
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-size: 92px;
  text-align: center;
  color: var(--black);
}

h2 {
  font-size: 48px;
  color: var(--blue-primary);
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
}

.black-text {
  color: var(--black);
}

/* .section {
  padding: 20px;
  margin: auto;
  max-width: 1280px;
} */
</style>