

<script setup>
import NavigationBar from '../components/Navigationbar/NavigationBar.vue';
import ProfileResults from '../components/Profileresults/ProfileResults.vue';
import SearchBar from '../components/Searchbar/SearchBar.vue';
import { ref, watch, onMounted } from 'vue';

// create ref so it will track changes in data, search and actualData
const data = ref([]);
const search = ref('');
const filteredData = ref([]);

// onMounted fetch new data and set both data and actualData to be the same
onMounted(async () => {
  const response = await fetch('https://randomuser.me/api/?seed=bristol&results=10');
  const prematureData = await response.json();
  data.value = prematureData.results;
  filteredData.value = data.value;
});

watch(search, () => {
  filteredData.value = data.value.filter((element) => {
    return element.gender.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
  })
})
</script>

<template>
  <NavigationBar />
  <SearchBar :search="search" @update:search="search = $event" />
  <ProfileResults :data="filteredData" />
</template>
