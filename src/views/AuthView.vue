<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputDefault from '@/components/InputDefault.vue';
import { ref } from 'vue';

const form = ref<{ email?: string, password?: string }>({});

function onSubmit(event: Event) {
    event.preventDefault();
    console.log(event);
    form.value = {};
}
</script>

<template>
    <div class="auth">
        <div class="auth__form">
            <h1 class="auth__header">Bookmarkly</h1>
            <form class="auth__box" @submit="onSubmit">
                <InputDefault v-model="form.email" placeholder="Email" />
                <InputDefault v-model="form.password" placeholder="Password" type="password" />
                <ButtonText type="submit">Entry</ButtonText>
            </form>
        </div>
    </div>
</template>

<style scoped>
.auth {
    display: grid;
    place-items: center;
    min-height: 100vh;
}
.auth__header {
    font-size: 52px;
    font-weight: 700;
}
.auth__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}
.auth__box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}
</style>