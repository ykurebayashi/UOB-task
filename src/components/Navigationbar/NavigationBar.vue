<template>
    <header class="header">
        <div class="header__nav-top">
            <ul class="header__nav">
                <li class="header__nav-item">Home</li>
                <li class="header__nav-item">
                    Study at Bristol
                    <svg class="header__nav-item__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                        height="11" viewBox="0 0 14 14" fill="#c28a0e">
                        <title>arrow-down</title>
                        <path d="M14 4.813l-2.625-2.625-4.375 4.375-4.375-4.375-2.625 2.625 7 7z"></path>
                    </svg>
                </li>
                <li class="header__nav-item">About</li>
                <li class="header__nav-item">Schools & faculties</li>
                <li class="header__nav-item">Research</li>
                <li class="header__nav-item">Business & partnerships</li>
                <li class="header__nav-item">News</li>
                <li class="header__nav-item">People</li>
            </ul>
        </div>
        <div class="header__nav-burger">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px"
                height="50px" viewBox="0 0 100 100">
                <path stroke-width="24" stroke-linecap="round" stroke="#fff" d="M15 20L85 20M15 50L85 50M15 80L85 80" />
            </svg>

        </div>
        <div class="header__banner-bottom">
            <img class="header__banner-bottom__logo" src="src/assets/University_of_Bristol_logo.png" />
            <h2 class="header__banner-bottom__text">Our people</h2>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/style.scss';

.header {
    border-bottom: 1px solid $darkGrey;
}

.header__nav-top {
    background-color: $black;
    width: 100%;
    height: 50px;

    .header__nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        margin: 0 auto;
        border-top: 1px solid $darkGrey;
        border-bottom: 1px solid $darkGrey;
        max-width: 1350px;
    }

    .header__nav-item {
        color: white;
        height: 100%;
        list-style: none;
        padding: 12px 10px;
        flex-grow: 1;
        text-align: center;
        border-left: 1px solid $darkGrey;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .header__nav-item:last-child {
            border-right: 1px solid $darkGrey;
        }

        .header__nav-item__arrow {
            margin-left: 5px;
        }
    }

    .header__nav-item:hover {
        background-color: $darkGrey;
    }
}

.header__nav-burger {
    display: none
}

.header__banner-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    margin: 0 auto;
    max-width: 1300px;
    width: 100%;

    .header__banner-bottom__logo {
        width: 170px;
        margin: 0 60px;
    }

    .header__banner-bottom__text {
        flex-grow: 1;
    }
}

@media screen and (max-width: 700px) {
    .header__nav-top {
        display: none;
    }

    .header__nav-burger {
        display: block;
        background-color: $black;
        width: 100%;
        height: 80px;
        @include verticalCenter;
        align-items: flex-end;
        padding: 10px;
    }
}
</style>