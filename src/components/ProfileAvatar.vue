<script setup lang="ts">
import { useProfileStore } from "../stores/profile.store";
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
    <div class="profile-avatar" v-if="store.profile">
        <div class="image-avatar">
            <img src="/avatar.jpg" alt="avatar" />
        </div>
        <div>Hello, {{ store.profile.name }}</div>
    </div>
</template>

<style lang="scss" scoped>
.profile-avatar {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.image-avatar {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>