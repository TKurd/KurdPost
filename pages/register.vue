<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-8">
      <h2 class="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Tomarkirina Nû
      </h2>
      
      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nav û Paşnav
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full px-4 py-2 bg-background-light dark:bg-background-dark
                   border border-gray-200 dark:border-gray-700 rounded-lg 
                   focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                   focus:border-transparent text-gray-900 dark:text-gray-100"
          />
        </div>

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

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Şîfre Dubare
          </label>
          <input
            v-model="form.passwordConfirm"
            type="password"
            required
            class="w-full px-4 py-2 bg-background-light dark:bg-background-dark
                   border border-gray-200 dark:border-gray-700 rounded-lg 
                   focus:ring-2 focus:ring-primary dark:focus:ring-primary-light
                   focus:border-transparent text-gray-900 dark:text-gray-100"
          />
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            v-model="form.terms"
            required
            class="h-4 w-4 text-primary dark:text-primary-light 
                   focus:ring-primary dark:focus:ring-primary-light 
                   border-gray-200 dark:border-gray-700 rounded"
          />
          <label class="ml-2 text-sm text-gray-600 dark:text-gray-400">
            Ez mercên bikaranînê qebûl dikim
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-primary hover:bg-primary-dark dark:bg-primary-light 
                 dark:hover:bg-primary text-white py-2 px-4 rounded-lg 
                 transition-colors focus:ring-2 focus:ring-offset-2 
                 focus:ring-primary dark:focus:ring-primary-light"
        >
          Tomar bibe
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Hesabê te heye?
        <NuxtLink to="/login" 
                  class="text-primary dark:text-primary-light hover:text-primary-dark 
                         dark:hover:text-primary font-medium">
          Têkeve
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  terms: false
})

const handleRegister = () => {
  console.log('Form submitted:', form.value)
  // Li vir dê tomarkirina bikarhêner bê kontrolkirin
}
</script> 