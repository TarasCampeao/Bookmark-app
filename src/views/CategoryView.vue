<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.alias);
</script>

<template>
    <div>
        Category
        {{ $route.params.alias }}
    </div>
</template>