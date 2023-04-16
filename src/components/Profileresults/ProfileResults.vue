<script setup>
import CardsSection from './CardsSection.vue';
import { toRefs } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const { data } = toRefs(props);
console.log(data)
</script>

<template>
    <div class="profileresults__container">
        <div class="profileresults__container__parent">
            <div class="block2">
                <CardsSection v-for="dats in data" :key="dats.phone" :name="dats.name.first + ' ' + dats.name.last"
                    :treatment="dats.name.title" :location="dats.location.city + '/' + dats.location.country"
                    :image="dats.picture.large" :phone="dats.cell" :email="dats.email" />
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
    flex-wrap: wrap;
    width: 100%;
    margin-left: 40px;
}
</style>