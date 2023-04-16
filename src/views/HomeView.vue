<script setup>
import SearchBar from '../components/Searchbar/SearchBar.vue';
import CardsSection from '../components/CardsSection/CardsSection.vue';
import { ref, computed, onMounted, toRef, onUpdated } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  showSearch: {
    type: Boolean,
    required: true,
  }
});

// Create two objects with intial value [] and ''
const data = ref([]);
const search = ref('');
const page = ref(0);
const url = toRef(props, 'url');
const showSearch = toRef(props, 'showSearch');

// Here I reassign the value to the data with the return from the API
onMounted(async () => {
  const response = await fetch(url.value);
  const prematureData = await response.json();
  data.value = prematureData.results;
});

onUpdated(async () => {
  const response = await fetch(url.value);
  const prematureData = await response.json();
  data.value = prematureData.results;
})

// Creates a variable, filteredData that is just the data that we got from the call without changing the original values (so we can reuse them without the need to re-fetch)
const filteredData = computed(() => {
  return data.value.filter((element) => {
    return element.name.first.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
  });
});
</script>

<template>
  <!--Here I have a searchbar that receives as props the value of the object search-->
  <SearchBar v-if="showSearch" :search="search" @update:search="search = $event" />
  <!--Here I have the cards-->
  <div class="profileresults__container">
    <div class="profileresults__container__parent">
      <div v-if="filteredData.length < 11" class="block2">
        <CardsSection v-for="element in filteredData" :key="element.phone"
          :name="element.name.first + ' ' + element.name.last" :treatment="element.name.title"
          :location="element.location.city + '/' + element.location.country" :image="element.picture.large"
          :phone="element.cell" :email="element.email" />
      </div>
      <div class="block2" v-else>
        <CardsSection v-for="element in filteredData.slice(10 * page, 10 + (10 * page))" :key="element.phone"
          :name="element.name.first + ' ' + element.name.last" :treatment="element.name.title"
          :location="element.location.city + '/' + element.location.country" :image="element.picture.large"
          :phone="element.cell" :email="element.email" />
      </div>
    </div>
  </div>
  <button @click="page--">Back</button>
  <button @click="page++">next</button>
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
