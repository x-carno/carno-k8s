<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div class="dashboar-container scroll-y">
        Contents
        <button @click="count++">{{ count }}</button>
    </div>
</template>