<template>
    <div class="index">
        <h1 class="index__header">Welcome to Bookmarkly!</h1>
        <div class="index__description">Select please category.</div>
    </div>
</template>


<style scoped>
.index {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 120px;
}
.index__header {
    font-size: 24px;
    font-weight: 500;
}
.index__description {
    font-size: 16px;
}
</style>