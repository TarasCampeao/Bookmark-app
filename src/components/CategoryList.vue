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
        <li v-for="item in store.categories" :key="item.id" class="category-item">
            <RouterLink :to="`/main/${item.alias}`">{{ item.name }}</RouterLink>
        </li>
        <li>
            <ButtonIcon @click="store.createCategory">
                <IconPlus />
            </ButtonIcon>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.profile-avatar + .category-list {
    margin-top: 30px;
}
.category-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.active-link {
    font-size: 24px;
    font-weight: 700;
}
.category-item {
    a {
        text-decoration: none;
        font-size: 20px;
        color: var(--color-fg);
        position: relative;
        display: inline-block;
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-fg);
            transition: width 0.3s ease;
        }
        &:hover {
            &:after {
                width: 100%;
            }
        }
        &.router-link-active {
            &:after {
                width: 100%;
            }
        }
    }
}
</style>