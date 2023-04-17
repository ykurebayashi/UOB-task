<script setup>
import { toRefs } from 'vue';
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
})

const { name, image, location, phone, email, treatment } = toRefs(props);
</script>

<template>
    <div class="card">
        <img class="card__img" :alt="'Image of' + name" :src="image" />
        <div class="card__infos">
            <div class="card__infos-personal">
                <h2 class="card__info-personal__name" aria-label="Treatment">{{ treatment }}</h2>
                <h2 class="card__info-personal__name" aria-label="Name">{{ name }}</h2>
                <h3 class="card__info-personal__job" aria-label="Location">{{ location }}</h3>
            </div>
            <div class="card__info-buttons">
                <a class="card__info-buttons__phone" :href="'tel:' + phone" aria-label="Call icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
                        width="20" height="20">
                        <path
                            d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z"
                            fill="rgb(191, 46, 61)">
                        </path>
                    </svg>
                </a>
                <a class="card__info-buttons__mail" :href="'mailto:' + email" aria-label="Email icon">
                    <svg id="my-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24" width="20" height="20">
                        <path
                            d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                            fill="rgb(191, 46, 61)"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scopde>
@import '../../assets/style.scss';

.card {
    @include verticalCenter;
    width: 210px;
    height: 165px;
    background-color: white;
    border-radius: 10px;
    box-shadow: $boxShadow;
    position: relative;
    margin: 50px 25px;
}

.card__img {
    width: 90px;
    border-radius: 50%;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card__infos,
.card__infos-personal {
    @include verticalCenter;
}

.card__infos {
    height: 90px;
    margin-top: 40px;
}

.card__info-personal__name {
    font-size: $fontSizeBig;
    color: $red;
    font-weight: 600;
    text-align: center;
}

.card__info-personal__job {
    font-size: $fontSizeMedium;
    color: $black;
    font-weight: 300;
}

.card__info-buttons {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
}

.card__info-buttons__mail,
.card__info-buttons__phone {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $lightGrey;
}

.card__info-buttons__mail:hover,
.card__info-buttons__phone:hover {
    background-color: $red;
    border: none;
}

.card__info-buttons__mail:hover path,
.card__info-buttons__phone:hover path {
    fill: white;
}
</style>