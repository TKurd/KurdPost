<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Parvekirinên Sereke -->
      <div class="col-span-full lg:col-span-2">
        <div class="mb-8">
          <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6">
            <textarea
              v-model="newPost"
              rows="3"
              placeholder="Tiştekî binivîse..."
              class="w-full p-3 bg-background-light dark:bg-background-dark rounded-lg 
                     border border-gray-200 dark:border-gray-700 focus:ring-2 
                     focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
            ></textarea>
            <div class="flex justify-end mt-4">
              <button 
                @click="sharePost"
                class="bg-primary hover:bg-primary-dark dark:bg-primary-light 
                       dark:hover:bg-primary text-white px-6 py-2 rounded-lg 
                       transition-colors"
              >
                Parve Bike
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div v-for="post in posts" :key="post.id" 
               class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6 
                      hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <img :src="post.userAvatar" :alt="post.userName" 
                   class="w-10 h-10 rounded-full mr-3">
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">
                  {{ post.userName }}
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {{ post.date }}
                </span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.content }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <button class="text-gray-500 dark:text-gray-400 hover:text-primary 
                              dark:hover:text-primary-light flex items-center">
                  <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {{ post.likes }}
                </button>
                <button class="text-gray-500 dark:text-gray-400 hover:text-primary 
                              dark:hover:text-primary-light flex items-center">
                  <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {{ post.comments }}
                </button>
              </div>
              <button class="text-gray-500 dark:text-gray-400 hover:text-primary 
                            dark:hover:text-primary-light">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Beşa Alî -->
      <div class="col-span-full lg:col-span-1 space-y-6">
        <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Kategorî
          </h2>
          <ul class="space-y-2">
            <li v-for="category in categories" :key="category.id">
              <NuxtLink :to="`/kategori/${category.slug}`" 
                     class="flex items-center text-gray-600 dark:text-gray-300 
                            hover:text-primary dark:hover:text-primary-light">
                <span>{{ category.nav }}</span>
                <span class="ml-auto text-gray-500 dark:text-gray-400 text-sm">
                  ({{ category.count }})
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Pêşniyarên Têkiliyan
          </h2>
          <div class="space-y-4">
            <div v-for="user in suggestedUsers" :key="user.id" 
                 class="flex items-center">
              <img :src="user.avatar" :alt="user.name" 
                   class="w-10 h-10 rounded-full mr-3">
              <div class="flex-grow">
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">
                  {{ user.name }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ user.bio }}
                </p>
              </div>
              <button class="text-primary dark:text-primary-light hover:text-primary-dark 
                            dark:hover:text-primary text-sm font-medium">
                + Bişopîne
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const newPost = ref('')

const sharePost = () => {
  if (newPost.value.trim()) {
    // Li vir dê parvekirin bê kontrolkirin
    console.log('Parvekirina nû:', newPost.value)
    newPost.value = ''
  }
}

const posts = ref([
  {
    id: 1,
    userName: 'Rojda Welat',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Îro min pirtûka "Mem û Zîn" a Ehmedê Xanî xwend. Pirtûkeke gelekî balkêş e...',
    date: '2024-03-20',
    likes: 24,
    comments: 5
  },
  {
    id: 2,
    userName: 'Baran Başûr',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Li Amedê festîvalek çandî heye. Kî dixwaze tevlî bibe?',
    date: '2024-03-19',
    likes: 18,
    comments: 12
  },
  {
    id: 3,
    userName: 'Hêvî Botan',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Min îro dest bi nivîsandina romaneke nû kir. Hêvîdarim ku dê balkêş be.',
    date: '2024-03-18',
    likes: 32,
    comments: 8
  }
])

const categories = ref([
  { id: 1, nav: 'Civakî', slug: 'civaki', count: 156 },
  { id: 2, nav: 'Wêje', slug: 'weje', count: 89 },
  { id: 3, nav: 'Huner', slug: 'huner', count: 94 },
  { id: 4, nav: 'Teknolojî', slug: 'teknoloji', count: 67 }
])

const suggestedUsers = ref([
  {
    id: 1,
    name: 'Dilşad Amedî',
    avatar: 'https://i.pravatar.cc/150?img=4',
    bio: 'Nivîskar û Helbestvan'
  },
  {
    id: 2,
    name: 'Şîlan Botanî',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Wênesaz'
  },
  {
    id: 3,
    name: 'Azad Cizîrî',
    avatar: 'https://i.pravatar.cc/150?img=6',
    bio: 'Muzîkjen'
  }
])
</script> 