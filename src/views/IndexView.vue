<template>
    <div class="index">
        <h1 class="index__header">Welcome to Bookmarkly!</h1>
        <div class="index__description">Select please category.</div>
    </div>
</template>


<style lang="scss" scoped>
.index {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 120px;
    &__header {
        font-size: 24px;
        font-weight: 500;
    }
    &__description {
        font-size: 16px;
    }
}
</style>