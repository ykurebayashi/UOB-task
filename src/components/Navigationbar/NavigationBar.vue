<template>
    <header class="header">
        <div class="header__nav__top">
            <ul class="header__nav">
                <li class="header__nav__links">Home</li>
                <li class="header__nav__links">
                    Study at Bristol
                    <svg class="header__nav__link__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="11"
                        height="11" viewBox="0 0 14 14" fill="#c28a0e">
                        <title>arrow-down</title>
                        <path d="M14 4.813l-2.625-2.625-4.375 4.375-4.375-4.375-2.625 2.625 7 7z"></path>
                    </svg>
                </li>
                <li class="header__nav__links">About</li>
                <li class="header__nav__links">Schools & faculties</li>
                <li class="header__nav__links">Research</li>
                <li class="header__nav__links">Business & partnerships</li>
                <li class="header__nav__links">News</li>
                <li class="header__nav__links">People</li>
            </ul>
        </div>
        <div class="header__banner">
            <img class="header__banner__logo" src="src/assets/University_of_Bristol_logo.png" />
            <h2 class="header__banner__text">Our people</h2>
            <div>
                teste123
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    border-bottom: 1px solid grey;
}

.header__nav__top {
    background-color: #161b20;
    width: 100%;
    height: 50px;
}

.header__nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    margin: 0 auto;
    border-top: 1px solid #45494d;
    border-bottom: 1px solid #45494d;
    max-width: 1350px;
}

.header__nav__links {
    color: white;
    height: 100%;
    list-style: none;
    padding: 12px 10px;
    flex-grow: 1;
    text-align: center;
    border-left: 1px solid #45494d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.header__nav__links:last-child {
    border-right: 1px solid #45494d;
}

.header__nav__links:hover {
    background-color: #45494D;
}

.header__nav__link__arrow {
    margin-left: 5px;
}

.header__banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    margin: 0 auto;
    max-width: 1300px;
    width: 100%;
}

.header__banner__logo {
    width: 170px;
    margin: 0 60px;
}

.header__banner__text {
    flex-grow: 1;
}
</style>