<script lang="ts" setup>
import { useTemplateRef } from 'vue';

const data = defineModel<string>();
const input = useTemplateRef<HTMLInputElement>('input');
</script>

<template>
    <input class="default-input" v-model="data" ref="input" />
</template>

<style scoped>
.default-input {
    border: none;
    border-bottom: 1px solid var(--color-fg);
    font-size: 24px;
    min-width: 274px;
}
.default-input::placeholder {
    color: var(--color-inactive);
}
</style>