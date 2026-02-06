import { defineStore } from "pinia";
import { ref } from "vue";
import type { Category } from "@/interfaces/category.interface";
import { API_ROUTES, http } from "../api";

export const useCategoryStore = defineStore('categories', () => {
    const categories = ref<Category[]>([]);

    async function fetchCategories() {
        const { data } = await http.get<Category[]>(API_ROUTES.categories);
        categories.value = data;
    }

    return { categories, fetchCategories }
});