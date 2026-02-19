<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-fg);
    cursor: pointer;
    border-radius: 50px;
    border: none;
    transition: .3s linear all;
    &:hover {
        background: var(--color-fg-hover);
    }
}
</style>