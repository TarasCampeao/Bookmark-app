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

<style scoped>
.app {
  display: flex;
  gap: 200px;
  min-height: calc(100vh - 140px);
}
.nav {
  min-width: 400px;
}
main {
  width: 100%;
}
</style>