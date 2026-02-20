<script setup lang="ts">
import ProfileAvatar from '../components/ProfileAvatar.vue';
import CategoryList from '../components/CategoryList.vue';

</script>

<template>
    <div class="app">
        <nav class="nav">
            <ProfileAvatar />
            <CategoryList />
        </nav>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style lang="scss" scoped>
$topGap: 80px;
$topSticky: 40px;
.app {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 30px;
    min-height: calc(100vh - $topGap);
    padding-top: $topGap;
    @media (min-width: 1025px) {
        gap: 60px;
    }
}
.nav {
    min-width: 250px;
}
main {
    width: 100%;
}
</style>