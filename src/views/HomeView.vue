<script setup>
import NavigationBar from '../components/Navigationbar/NavigationBar.vue';
import SearchBar from '../components/Searchbar/SearchBar.vue';
import CardsSection from '../components/CardsSection/CardsSection.vue';
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

  <div class="profileresults__container">
    <div class="profileresults__container__parent">
      <div class="block2">
        <CardsSection v-for="element in filteredData" :key="element.phone"
          :name="element.name.first + ' ' + element.name.last" :treatment="element.name.title"
          :location="element.location.city + '/' + element.location.country" :image="element.picture.large"
          :phone="element.cell" :email="element.email" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.profileresults__container {
  padding: 0 4rem;
}

.profileresults__container__parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.block1 {

  min-width: 300px;
}

.block2 {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
