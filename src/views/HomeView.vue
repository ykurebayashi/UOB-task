<script setup>
import SearchBar from '../components/Searchbar/SearchBar.vue';
import CardsSection from '../components/CardsSection/CardsSection.vue';
import ButtonComponent from '../components/Button/ButtonComponent.vue'
import { ref, onMounted, toRefs, watch } from 'vue';

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
const isLoading = ref(false)
const { url, showSearch } = toRefs(props);

const fetchData = async (param) => {
  isLoading.value = true;
  const response = await fetch(`${url.value}${param}`);
  const prematureData = await response.json();
  data.value = prematureData.results;
  isLoading.value = false;
}

onMounted(async () => {
  fetchData(`&page=1`);
});

const nextPage = async () => {
  page.value++;
  fetchData(`&page=${page.value + 1}`)
}

const previousPage = async () => {
  if (page.value <= 0) return;
  page.value--;
  fetchData(`&page=${page.value + 1}`)
}

// Make debounce example with search
const debounceTime = 500;
watch(search, (newVal) => {
  if (newVal !== '') {
    setTimeout(() => {
      if (newVal === search.value) {
        // Here i'd make an API request with the value on the filter
        data.value = data.value.filter((element) => {
          return element.name.first.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
        });
      }
    }, debounceTime);
  } else {
    setTimeout(() => {
      if (newVal === search.value) {
        fetchData(`&page=${page.value + 1}`)
      }
    }, debounceTime);
  }
});

</script>

<template>
  <div class="wrapper" role="main" aria-label="Search Results">
    <SearchBar v-if="showSearch" :search="search" @update:search="search = $event" aria-label="Search Bar" />

    <div class="profileresults__container">
      <div v-if="data.length !== 0" class="profileresults__container-cards" role="list">
        <CardsSection v-for="element in data" :key="element.phone" :name="element.name.first + ' ' + element.name.last"
          :treatment="element.name.title" :location="element.location.city + '/' + element.location.country"
          :image="element.picture.large" :phone="element.cell" :email="element.email" role="listitem" />
      </div>
    </div>

    <div v-if="data.length !== 0" class="profileresults__container-pagination" role="navigation" aria-label="Pagination">
      <ButtonComponent @click="previousPage" title="Previous Page" aria-label="Previous Page" />
      <span>|</span>
      <ButtonComponent @click="nextPage" title="Next Page" aria-label="Next Page" />
    </div>

    <div v-if="data.length === 0 && !isLoading">
      <h2 class="profileresults__notfound">No users found</h2>
    </div>
    <div v-if="data.length === 0 && isLoading">
      <h2 class="profileresults__notfound">Loading...</h2>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../assets/style.scss';

.wrapper {
  margin-bottom: 80px;
}

.profileresults__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
}

.profileresults__container-cards {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1350px;
}

.profileresults__container-pagination {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1350px;
  padding: 0 4rem;
  margin: auto;
}

.profileresults__notfound {
  width: 100%;
  text-align: center;
  margin: 50px;
}
</style>
