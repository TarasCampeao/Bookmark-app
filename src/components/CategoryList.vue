<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';
import { RouterLink, useRouter } from 'vue-router';

const store = useCategoryStore();

onMounted(() => {
    store.fetchCategories();
});
</script>

<template>
    <ul class="category-list">
        <li v-for="item in store.categories" :key="item.id">
            <RouterLink :to="`/main/${item.alias}`">{{ item.name }}</RouterLink>
        </li>
        <li>
            <ButtonIcon @click="store.createCategory">
                <IconPlus />
            </ButtonIcon>
        </li>
    </ul>
</template>

<style scoped>
.category-list {
    display: flex;
    flex-direction: column;
    gap: 34px;
}
.active-link {
    font-size: 24px;
    font-weight: 700;
}
</style>