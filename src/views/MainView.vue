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
.app {
    display: flex;
    gap: 60px;
    min-height: calc(100vh - $topGap);
    padding-top: $topGap;
}
.nav {
    min-width: 250px;
}
main {
    width: 100%;
}
</style>