<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-8">
      <h2 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Têketin
      </h2>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            E-peyam
          </label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-2 bg-background-light dark:bg-background-dark
                   border border-gray-200 dark:border-gray-700 rounded-lg 
                   focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                   focus:border-transparent text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Şîfre
          </label>
          <input
            v-model="form.password"
            type="password"
            required
            class="w-full px-4 py-2 bg-background-light dark:bg-background-dark
                   border border-gray-200 dark:border-gray-700 rounded-lg 
                   focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                   focus:border-transparent text-gray-900 dark:text-gray-100"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              type="checkbox"
              v-model="form.remember"
              class="h-4 w-4 text-primary dark:text-primary-light 
                     focus:ring-primary dark:focus:ring-primary-light 
                     border-gray-300 dark:border-gray-700 rounded"
            />
            <label class="ml-2 text-sm text-gray-600 dark:text-gray-400">
              Min bi bîr bîne
            </label>
          </div>
          
          <a href="#" class="text-sm text-primary dark:text-primary-light hover:text-primary-dark 
                            dark:hover:text-primary">
            Şîfre ji bîr kir?
          </a>
        </div>

        <button
          type="submit"
          class="w-full bg-primary hover:bg-primary-dark dark:bg-primary-light 
                 dark:hover:bg-primary text-white py-2 px-4 rounded-lg 
                 transition-colors focus:ring-2 focus:ring-offset-2 
                 focus:ring-primary dark:focus:ring-primary-light"
        >
          Têkeve
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Hesabê te tune ye?
        <NuxtLink to="/register" 
                  class="text-primary dark:text-primary-light hover:text-primary-dark 
                         dark:hover:text-primary font-medium">
          Tomar bibe
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  email: '',
  password: '',
  remember: false
})

const handleLogin = () => {
  console.log('Form submitted:', form.value)
  // Li vir dê têketina bikarhêner bê kontrolkirin
}
</script> 