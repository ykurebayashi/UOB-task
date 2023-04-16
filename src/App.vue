<script setup>
import NavigationBar from './components/Navigationbar/NavigationBar.vue';
import HomeView from './views/HomeView.vue';

import { ref, watch } from 'vue';

const actualNumber = ref(1);
const url = ref(`https://randomuser.me/api/?seed=bristol&results=${10 * actualNumber.value}`)

watch(actualNumber, (newValue) => {
  url.value = `https://randomuser.me/api/?seed=bristol&results=${10 * newValue}`
})
</script>

<template>
  <NavigationBar />
  <HomeView :url="url" />
  <button @click="actualNumber++">Show more</button>
</template>
