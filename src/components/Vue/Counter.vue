<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
</script>
<template>
    <div class="vue-component">
        <h3>From Vue.js!</h3>
        <p>count: {{count}}</p>
        <button @click="count++">increment</button>
    </div>
</template>
<style lang="postcss" scoped>
.vue-component {
    padding: 5px;
    margin: 5px;
    border: 1px solid palevioletred;
}
</style>