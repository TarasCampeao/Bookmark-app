<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue';

const data = defineModel<string>();
const input = useTemplateRef<HTMLInputElement>('input');

const { isFocused = false } = defineProps<{ isFocused?: boolean }>();

onMounted(() => {
    if (isFocused && input.value) {
        input.value.focus();
    }
});

</script>

<template>
    <input class="default-input" v-model="data" ref="input" />
</template>

<style scoped>
.default-input {
    border: none;
    border-bottom: 1px solid var(--color-fg);
    font-size: 24px;
    min-width: 200px;
    max-width: 300px;
}
.default-input::placeholder {
    color: var(--color-inactive);
}
</style>