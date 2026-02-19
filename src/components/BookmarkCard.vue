<script lang="ts" setup>
import type { Bookmark } from '@/interfaces/bookmark.interface';
import ButtonIconBig from './ButtonIconBig.vue';
import IconLinkWhite from '@/icons/IconLinkWhite.vue';
import IconTrashWhite from '@/icons/IconTrashWhite.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { ref } from 'vue';
import PopupConfirm from './PopupConfirm.vue';


const { title, image, url, id, category_id } = defineProps<Bookmark>();
const bookmarkStore = useBookmarkStore();
const isOpened = ref<boolean>(false);

function openLink() {
    window.open(url, '_blank');
}

function deleteBookmark() {
    isOpened.value = !isOpened.value;
    bookmarkStore.deleteBookmark(id, category_id);
}


const truncate = (value: string | null | undefined, length = 0): string => {
    if (!value) return '';
    if (length <= 0) return value;
    return value.length > length ? value.substring(0, length) : value;
}
</script>

<template>
    <div class="bookmark-card">
        <div
            class="bookmark-card__image"
            :style="image ? { backgroundImage: `url(${image})` } : { background: `rgb(112 112 178)` }">
            <div
                class="bookmark-card__letter"
                v-if="!image">
                {{ truncate(title, 1) || truncate(url, 1) }}
            </div>
        </div>
        <div class="bookmark-card__title">
            {{ title || url }}
        </div>
        <div class="bookmark-card__footer">
            <ButtonIconBig @click="isOpened = !isOpened">
                <IconTrashWhite />
            </ButtonIconBig>
            <ButtonIconBig @click="openLink()">
                <IconLinkWhite />
            </ButtonIconBig>
        </div>
        <PopupConfirm
            text="Do you wanna remove bookmark?"
            :is-opened="isOpened"
            @cancel="isOpened = !isOpened"
            @ok="deleteBookmark"
        />
    </div>
</template>

<style scoped>
.bookmark-card {
    border-radius: 30px;
    max-width: 400px;
    background: var(--color-fg);
    box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, .1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.bookmark-card__image {
    min-height: 160px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
}
.bookmark-card__title {
    color: var(--color-bg);
    font-size: 16px;
    font-weight: 500;
}
.bookmark-card__footer {
    display: flex;
    justify-content: space-between;
}
.bookmark-card__letter {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
}
</style>