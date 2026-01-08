<script setup lang="ts">

</script>

<template>
    <div class="nav">
        <div class="main-nav">
            <p>MovieExplorer</p>
            <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/movies">Movies</router-link>
                <router-link to="/movies/favourites">Favourites</router-link>
            </div>
            <p class="mobile-menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                    width="24px" fill="crimson">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg></p>
        </div>
    </div>
</template>

<style scoped>
.nav {
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
}

.main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
}

.links {
    display: none;
    gap: 20px;
}
.mobile-menu{
    display: flex;
}

p {
    font-size: 20px;
    color: crimson;
}

:deep(a) {
    text-decoration: none;
    color: crimson;
    font-size: 18px;
    cursor: pointer;
}

:deep(.router-link-active) {
    text-decoration: underline;
}

@media (min-width:450px) {
    .links {
        display: flex;
    }
    .mobile-menu{
        display: none;
    }

}
</style>
