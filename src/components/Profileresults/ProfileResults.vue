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
</script>

<template>
    <div class="profileresults__container">
        <div class="profileresults__container__parent">
            <div class="block1">this is block 1</div>
            <div class="block2">
                <CardsSection v-for="dats in data" :key="dats.phone" :name="dats.gender" :occupation="dats.gender"
                    :image="dats.gender" />
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