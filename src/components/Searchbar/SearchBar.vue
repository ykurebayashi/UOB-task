<script setup>
import { watch, ref, defineEmits } from 'vue';
const emit = defineEmits(['update:search'])

// Getting the props search
const props = defineProps({
    search: {
        type: String,
        required: false
    }
});

const localSearch = ref(props.search);

watch(localSearch, (newValue) => {
    emit('update:search', newValue);
});
</script>

<template>
    <div class="searchbar__upper">
        <div class="searchbar">
            <p class="searchbar__title">Search by name</p>
            <input v-model="localSearch" class="searchbar__input" type="text" />
        </div>
    </div>
</template>

<style scoped>
.searchbar__upper {
    padding: 0 4rem;
}

.searchbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 165px;
    margin: 0 auto;
    max-width: 1310px;
    width: 100%;
    background-color: #e5e6e5;
    padding: 20px;
    margin-top: 50px;
}

.searchbar__title {
    margin-bottom: 10px;
}

.searchbar__input {
    height: 50%;
    width: 95%;
    border: none;
}
</style>