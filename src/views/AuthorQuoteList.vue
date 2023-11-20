<template>
    <div>
        <div class="quote-list-autor">
            <h2>{{ author }}</h2>
        </div>
        <ul class="quote-list">
            <li v-for="quote in data" :key="quote._id" class="qoute-list-element">
                <QuoteViewer :quote="{ text: quote.quoteText, author: quote.quoteAuthor, genre: quote.quoteGenre }"
                    :no-link="true" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import QuoteViewer from '@/components/QuoteViewer.vue';
const { author } = defineProps<{ author: string }>()
const encodedAuthor = encodeURIComponent(author);
const response = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${encodedAuthor}`);
const { data } = await response.json();

</script>

