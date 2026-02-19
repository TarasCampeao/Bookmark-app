<script lang="ts" setup>
import type { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import CategoryHeader from '@/components/CategoryHeader.vue';
import BookmarkCard from '@/components/BookmarkCard.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
import BookmarkAdd from '@/components/BookmarkAdd.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();

function sortBookmarks(sort: string) {
    bookmarkStore.activeSort = sort;
    if (category.value) {
        bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
    }
}

onMounted(() => {
    category.value = categoryStore.getCategoryByAlias(route.params.alias);
    if (category.value) {
        bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
    }
});


watch(() => ({
        alias: route.params.alias,
        categories: categoryStore.categories,
    }),
    (data) => {
        category.value = categoryStore.getCategoryByAlias(data.alias);
        if (category.value) {
            bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
        }
    },
);

console.log(categoryStore.getCategoryByAlias(route.params.alias));
</script>

<template>
    <div>
        <CategoryHeader v-if="category" :category="category" />
        <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks" />
        <div class="category-list">
            <BookmarkCard
                v-for="item in bookmarkStore.bookmarks"
                :key="item.index"
                v-bind="item"
            />
            <BookmarkAdd v-if="category" :category_id="category.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.category-list {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
</style>
