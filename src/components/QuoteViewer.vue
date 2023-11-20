<template>
    <section class="quote">
        <p class="quote-text">
            {{ quote.text }}
        </p>
        <RouterLink v-if="!noLink" class="caption" :to="{
            name: 'author', params: { author: quote.author }
        }">
            <h2 class="quote-author">{{ quote.author }}</h2>
            <h3 class="quote-genre">{{ quote.genre }}</h3>
            <span class="material-symbols-outlined goto-author">
                trending_flat
            </span>
        </RouterLink>
    </section>
</template>

<script setup lang="ts">
import type Quote from './qoute';

const { quote, noLink } = defineProps<{ quote: Quote, noLink?: boolean }>()

</script>
