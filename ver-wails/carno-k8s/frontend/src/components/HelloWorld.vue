<script setup>
import { reactive } from 'vue'
import { Greet } from '../../wailsjs/go/main/App'
import Content from './Content.vue'

const data = reactive({
  name: "",
  resultText: "Please enter your name below 👇",
})

function greet() {
  Greet(data.name).then(result => {
    data.resultText = result
  })
}

</script>

<template>
  <div class="dashboard-container scroll-y">
    <main>
      <!-- <div id="result" class="result">{{ data.resultText }}</div>
      <div id="input" class="input-box">
        <input id="name" v-model="data.name" autocomplete="off" class="input" type="text" />
        <button class="btn" @click="greet">Greet</button>
      </div> -->
      <Content />
    </main>
  </div>
</template>

<style scoped lang="scss"></style>
