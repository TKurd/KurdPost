<template>
  <div :class="{ 'dark': isDark }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const isDark = useDark()

// Set initial theme
onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<style>
html {
  @apply antialiased;
}

body {
  @apply bg-background-light dark:bg-background-dark 
         text-content-primary dark:text-content-primary-dark
         transition-colors duration-200;
}

/* Base text styles */
h1 {
  @apply text-content-primary dark:text-content-primary-dark;
}

h2, h3, h4, h5, h6 {
  @apply text-content-primary dark:text-content-primary-dark;
}

p {
  @apply text-content-secondary dark:text-content-secondary-dark;
}

/* Link styles */
a {
  @apply text-primary hover:text-primary-dark 
         dark:text-primary-light dark:hover:text-primary
         transition-colors duration-200;
}

/* Input styles */
input, textarea {
  @apply bg-surface-light dark:bg-surface-dark
         border-gray-200 dark:border-gray-700
         focus:ring-primary dark:focus:ring-primary-light
         text-content-primary dark:text-content-primary-dark;
}

/* Button styles */
button {
  @apply transition-colors duration-200;
}

.btn-primary {
  @apply bg-primary hover:bg-primary-dark 
         dark:bg-primary-light dark:hover:bg-primary 
         text-white;
}

.btn-secondary {
  @apply bg-secondary hover:bg-secondary-dark 
         dark:bg-secondary-light dark:hover:bg-secondary 
         text-white;
}
</style>
