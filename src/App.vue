<script setup>
import NavigationBar from './components/Navigationbar/NavigationBar.vue';
import HomeView from './views/HomeView.vue';
import { ref } from 'vue';

const url = ref(`https://randomuser.me/api/?seed=bristol&results=10`)
</script>

<template>
  <NavigationBar />
  <HomeView :url="url" :show-search="true" />
</template>
