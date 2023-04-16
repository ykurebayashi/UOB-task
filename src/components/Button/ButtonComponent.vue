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