<template>
    <div>
        <QuoteViewer :quote="randomQuote" />
    </div>
</template>

<script setup lang="ts">
import QuoteViewer from '@/components/QuoteViewer.vue';
import type Quote from '@/components/qoute';

const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');
const { data } = await response.json();

const randomQuote = {
    text: data[0]['quoteText'] || '',
    author: data[0]['quoteAuthor'] || '',
    genre: data[0]['quoteGenre'] || '',
} as Quote
</script>

<style scoped></style>