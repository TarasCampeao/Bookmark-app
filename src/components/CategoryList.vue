<script lang="ts" setup>
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoryStore();

onMounted(() => {
    store.fetchCategories();
});
</script>

<template>
    <ul class="category-list">
        <li v-for="item in store.categories" :key="item.id">
            <RouterLink :to="`${item.alias}`">{{ item.name }}</RouterLink>
        </li>
    </ul>
</template>

<style scoped>
.category-list {
    display: flex;
    flex-direction: column;
    gap: 34px;
}
</style>