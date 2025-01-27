<template>
  <nav class="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-primary">KurdPost</NuxtLink>

        <!-- Menu Items -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/derheq" 
                    class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
            Derheq
          </NuxtLink>
          <div class="relative group">
            <button class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light flex items-center">
              Kategorî
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-48 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg py-2 hidden group-hover:block
                        border border-gray-200 dark:border-gray-700">
              <NuxtLink v-for="category in categories" 
                        :key="category.slug"
                        :to="`/kategori/${category.slug}`" 
                        class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                {{ category.nav }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <NuxtLink to="/login" 
                    class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
            Têketin
          </NuxtLink>
          <NuxtLink to="/register" 
          class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
            Tomar bibe
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-600 dark:text-gray-300" @click="isMenuOpen = !isMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden py-4">
        <NuxtLink to="/derheq" 
                  class="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
          Derheq
        </NuxtLink>
        <div class="py-2">
          <button class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light" 
                  @click="isCategoryOpen = !isCategoryOpen">
            Kategorî
            <svg class="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="isCategoryOpen" class="pl-4 mt-2">
            <NuxtLink v-for="category in categories" 
                      :key="category.slug"
                      :to="`/kategori/${category.slug}`" 
                      class="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light">
              {{ category.nav }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)
const isCategoryOpen = ref(false)

const categories = [
  { nav: 'Civakî', slug: 'civaki' },
  { nav: 'Wêje', slug: 'weje' },
  { nav: 'Huner', slug: 'huner' },
  { nav: 'Teknolojî', slug: 'teknoloji' }
]
</script> 