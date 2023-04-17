<script setup>
import NavigationBar from './components/Navigationbar/NavigationBar.vue';
import HomeView from './views/HomeView.vue';
import SearchBar from './components/Searchbar/SearchBar.vue';
import { ref, watch } from 'vue';

const url = ref(`https://randomuser.me/api/?seed=bristol&results=20`)
const searchQuery = ref('')

const search = () => {
  url.value = `https://randomuser.me/api/?gender=${searchQuery.value}&results=20`
}

let timeoutId = null
const searchDebounced = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    search()
  }, 500)
}

watch(url, () => {
  console.log('updated url')
})
</script>

<template>
  <NavigationBar />
  <SearchBar :search="searchQuery" @update:search="searchQuery = $event; searchDebounced()" />
  <HomeView :url="url" :show-search="false" />
</template>
