<script setup>
import SearchBar from '../components/Searchbar/SearchBar.vue';
import CardsSection from '../components/CardsSection/CardsSection.vue';
import ButtonComponent from '../components/Button/ButtonComponent.vue'
import { ref, computed, onMounted, toRef } from 'vue';

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

const data = ref([]);
const search = ref('');
const page = ref(0);
const filter = ref();
const url = toRef(props, 'url');
const showSearch = toRef(props, 'showSearch');

onMounted(async () => {
  const response = await fetch(url.value);
  const prematureData = await response.json();
  data.value = prematureData.results;
});

function applyFilter(data, filter) {
  let tempData = data.filter((element) => {
    return element.name.first.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
  });

  if (!filter) {
    return tempData;
  }

  switch (filter.type) {
    case 'gender':
      return tempData.filter((element) => element.gender === filter.value);
    default:
      return data;
  }
}

const filteredData = computed(() => {
  return applyFilter(data.value, filter.value);
});

const nextPage = () => {
  const upperLimit = Math.floor(filteredData.value.length / 10);
  if (page.value >= upperLimit - 1) return;
  return page.value++;
}

const previousPage = () => {
  if (page.value <= 0) return;
  return page.value--;
}
</script>

<template>
  <!--Here I have a searchbar that receives as props the value of the object search-->
  <SearchBar v-if="showSearch" :search="search" @update:search="search = $event" />


  <!--Here I have the cards-->
  <div class="profileresults__container">
    <div class="profileresults__container__parent">
      <div class="block1">
        <button @click="filter = { type: 'gender', value: 'male' }">filter man</button>
      </div>
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

  <!--Here I have the next and previous page buttons-->
  <ButtonComponent @click="previousPage" title="Previous Page" />
  <ButtonComponent @click="nextPage" title="Next Page" />
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
