<script setup>
import SearchBar from '../components/Searchbar/SearchBar.vue';
import CardsSection from '../components/CardsSection/CardsSection.vue';
import ButtonComponent from '../components/Button/ButtonComponent.vue'
import { ref, onMounted, toRefs, watch } from 'vue';

// Defining the props that are being received
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

// Defining needed state variables
const data = ref([]);
const search = ref('');
const page = ref(0);
const isLoading = ref(false)
const { url, showSearch } = toRefs(props);

// The function responsible for fetching data. It accepts a param as the query we want to make. So it's possible to implement in the future queries by gender, name, age, position, etc.
const fetchData = async (param) => {
  isLoading.value = true;
  try {
    const response = await fetch(`${url.value}${param}`);
    const prematureData = await response.json();
    data.value = prematureData.results;
  } catch (e) {
    // Here could existe a function to throw error to sentry or another app monitoring system
    console.log(e)
  }
  isLoading.value = false;
}

// When the component mounts, fetch the data page 1
onMounted(async () => {
  fetchData(`&page=1`);
});

// Next/Previous page function. Adds +1 to the current page and re-execute the fetch so it only fetchs the desired data
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
        // Here i'd make an API request with the value on the filter. If its a filter for name could be fetchData($page={pageValue}&name=searchValue).
        data.value = data.value.filter((element) => {
          return element.name.first.toLocaleLowerCase().includes(search.value.toLocaleLowerCase());
        });
      }
    }, debounceTime);
  } else {
    setTimeout(() => {
      if (newVal === search.value) {
        // If the newVal is an empty string, just to back to the page we were.
        fetchData(`&page=${page.value + 1}`)
      }
    }, debounceTime);
  }
});


// Example of filter from inside
/*
const actuallURL = ref(url.value);

watch(actuallURL, () => {
  fetchData('&page=1')
})*/

</script>

<template>
  <main class="search" role="main" aria-label="Search Results">
    <!--<ButtonComponent @click="actuallURL = actuallURL + '&nat=BR'" title="Filter Brazilians only" /> -->
    <SearchBar v-if="showSearch" :search="search" @update:search="search = $event" aria-label="Search Bar" />

    <section v-if="data.length !== 0" class="search__container">
      <div class="search__container-cards" role="list">
        <CardsSection v-for="element in data" :key="element.phone" :name="element.name.first + ' ' + element.name.last"
          :treatment="element.name.title" :location="element.location.city + '/' + element.location.country"
          :image="element.picture.large" :phone="element.cell" :email="element.email" role="listitem" />
      </div>
    </section>

    <nav v-if="data.length !== 0" class="search__pagination" role="navigation" aria-label="Pagination">
      <ButtonComponent @click="previousPage" title="Previous Page" aria-label="Previous Page" />
      <span>|</span>
      <ButtonComponent @click="nextPage" title="Next Page" aria-label="Next Page" />
    </nav>

    <section v-if="data.length === 0 && !isLoading">
      <h2 class="search__notfound">No users found</h2>
    </section>
    <section v-if="data.length === 0 && isLoading">
      <h2 class="search__notfound">Loading...</h2>
    </section>
  </main>
</template>


<style lang="scss" scoped>
@import '../assets/style.scss';

.search {
  margin-bottom: 80px;
}

.search__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
}

.search__container-cards {
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1350px;
}

.search__pagination {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1350px;
  padding: 0 4rem;
  margin: auto;
}

.search__notfound {
  text-align: center;
  margin: 50px;
}
</style>
