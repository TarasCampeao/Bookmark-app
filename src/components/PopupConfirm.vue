<script lang="ts" setup>
import ButtonText from './ButtonText.vue';
import { defineEmits } from 'vue';

const { isOpened, text } = defineProps<{
  isOpened: boolean,
  text: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void,
  (e: 'cancel'): void;
}>();
</script>

<template>
    <Transition name="fade">
        <Teleport to="body">
            <div class="popup__cover" v-if="isOpened">
                <div class="popup">
                <h3>{{ text }}</h3>
                <div class="popup__actions">
                    <ButtonText class="popup__actions-button" @click="emit('ok')">Yes</ButtonText>
                    <ButtonText class="popup__actions-button" @click="emit('cancel')">No</ButtonText>
                </div>
                </div>
            </div>
        </Teleport>
    </Transition>
</template>

<style scoped>
.popup__cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-inactive);
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup {
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-bg);
    min-width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.popup__actions {
    margin-top: 16px;
    display: flex;
    gap: 8px;
}
.popup__actions-button {
    min-width: 80px;
    text-align: center;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>