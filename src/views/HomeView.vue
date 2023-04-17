<script setup>
import SearchBar from '../components/Searchbar/SearchBar.vue';
import CardsSection from '../components/CardsSection/CardsSection.vue';
import ButtonComponent from '../components/Button/ButtonComponent.vue'
import { ref, computed, onMounted, toRefs } from 'vue';

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
const { url, showSearch } = toRefs(props);


onMounted(async () => {
  const response = await fetch(url.value);
  const prematureData = await response.json();
  data.value = prematureData.results;
});

function applyFilter(data, filter) {
  page.value = 0;
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
  if (12 * (page.value + 1) >= filteredData.value.length) return;
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
    <div class="profileresults__container-filter">
      <button @click="filter = { type: 'gender', value: 'male' }">filter man</button>
      <button @click="filter = { type: 'gender', value: 'female' }">filter woman</button>
    </div>
    <div class="profileresults__container-cards" v-if="filteredData.length < 11">
      <CardsSection v-for="element in filteredData" :key="element.phone"
        :name="element.name.first + ' ' + element.name.last" :treatment="element.name.title"
        :location="element.location.city + '/' + element.location.country" :image="element.picture.large"
        :phone="element.cell" :email="element.email" />
    </div>
    <div class="profileresults__container-cards" v-else>
      <CardsSection v-for="element in filteredData.slice(12 * page, 12 + (12 * page))" :key="element.phone"
        :name="element.name.first + ' ' + element.name.last" :treatment="element.name.title"
        :location="element.location.city + '/' + element.location.country" :image="element.picture.large"
        :phone="element.cell" :email="element.email" />
    </div>
  </div>

  <!--Here I have the next and previous page buttons-->
  <div class="profileresults__container-pagination">
    <ButtonComponent @click="previousPage" title="Previous Page" />
    <ButtonComponent @click="nextPage" title="Next Page" />
  </div>
</template>

<style scoped>
.profileresults__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
}

.profileresults__container-filter {
  margin-top: 50px;
  min-width: 300px;
}

.profileresults__container-cards {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.profileresults__container-pagination {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 4rem;
}
</style>
