<template>
    <div class="spinner-container">
        <SVGSpinner class="xxl" />
    </div>
</template>

<script setup lang="ts">
import SVGSpinner from './icons/SVGSpinner.vue';
</script>

<style scoped>
.spinner-container {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
}


.xxl {
    height: 10rem;
    width: 10rem;
}
</style>