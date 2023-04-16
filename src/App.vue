<script setup>
import NavigationBar from './components/Navigationbar/NavigationBar.vue';
import HomeView from './views/HomeView.vue';

import { onUpdated, ref } from 'vue';

const actualNumber = ref(1);
const url = ref(`https://randomuser.me/api/?seed=bristol&results=${10 * actualNumber.value}`)

onUpdated(() => {
  url.value = `https://randomuser.me/api/?seed=bristol&results=${10 * actualNumber.value}`
})
</script>

<template>
  <NavigationBar />
  <HomeView :url="url" />
  <button @click="actualNumber++">Show more</button>
</template>
