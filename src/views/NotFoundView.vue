<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
    router.push('/');
}
</script>

<template>
    <div class="not-found">
        <div class="not-found__form">
            <h1 class="not-found__header">404</h1>
            <ButtonText @click="redirectToMain">Go to main page</ButtonText>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    display: grid;
    place-items: center;
    min-height: 100vh;
    &__header {
        font-size: 128px;
        font-weight: 700;
        line-height: 1;
    }
    &__form {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 52px;
    }
}
</style>