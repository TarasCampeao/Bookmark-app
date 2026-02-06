<script lang="ts" setup>
import { useProfileStore } from '@/stores/profile.store';

const store = useProfileStore();
</script>

<template>
    <div>{{store.profile?.name}}</div>
</template>