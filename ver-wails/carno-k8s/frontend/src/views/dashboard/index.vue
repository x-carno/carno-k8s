<script setup>
const count = ref(0)
</script>

<template>
    <div class="dashboar-container scroll-y">
        Contents
        <button @click="count++">{{ count }}</button>
    </div>
</template>

<style scoped lang="scss">
</style>