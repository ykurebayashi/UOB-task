<script setup>
import { watch, ref } from 'vue';
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
    <div class="searchbar1">
        <div class="searchbar__container">
            <p class="searchbar__container-title">Search by name</p>
            <input v-model="localSearch" class="searchbar__container-input" type="text" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';

.searchbar1 {
    padding: 0 4rem;
}

.searchbar__container {
    @include verticalCenter;
    align-items: flex-start;
    height: 165px;
    margin: 0 auto;
    max-width: 1310px;
    width: 100%;
    background-color: $middleGrey;
    padding: 20px;
    margin-top: 50px;
}

.searchbar__container-title {
    margin-bottom: 10px;
}

.searchbar__container-input {
    height: 50%;
    width: 95%;
    border: none;
}
</style>