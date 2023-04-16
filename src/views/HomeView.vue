<script setup>
import NavigationBar from '../components/Navigationbar/NavigationBar.vue';
import ProfileResults from '../components/Profileresults/ProfileResults.vue';
import SearchBar from '../components/Searchbar/SearchBar.vue';
import { ref, computed, onMounted } from 'vue';

// Create two objects with intial value [] and ''
const data = ref([]);
const search = ref('');

// Here I reassign the value to the data with the return from the API
onMounted(async () => {
  const response = await fetch('https://randomuser.me/api/?seed=bristol&results=20');
  const prematureData = await response.json();
  data.value = prematureData.results;
});

// Creates a variable, filteredData that is just the data that we got from the call without changing the original values (so we can reuse them without the need to re-fetch)
const filteredData = computed(() => {
  return data.value.filter((element) => {
    return element.name.first.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
  });
});
</script>

<template>
  <!--Here I have a navigation bar, just visual purpose-->
  <NavigationBar />
  <!--Here I have a searchbar that receives as props the value of the object search-->
  <SearchBar :search="search" @update:search="search = $event" />
  <!--Here I have the profileResults that is the component responsible for rendering the cards with the filtered data-->
  <ProfileResults :data="filteredData" />
</template>
