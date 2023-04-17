<script setup>
// eslint-disable-next-line vue/no-setup-props-destructure
const { title } = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <button>{{ title }}</button>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';

button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: $red;
    margin: 0 10px;
}
</style>