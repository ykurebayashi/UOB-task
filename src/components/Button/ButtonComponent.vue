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

<style scoped>
button {
    background: none;
    border: none;
    padding: 0;
    font-family: arial, sans-serif;
    text-decoration: underline;
    cursor: pointer;
    color: rgb(191, 46, 61);
    margin: 0 10px;
}
</style>