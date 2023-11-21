<script setup lang="ts">
import { RouterView } from 'vue-router';
import LoaderView from './components/LoaderView.vue';
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <a href="/">random
          <span class="material-symbols-outlined">
            autorenew
          </span>
        </a>
      </nav>
    </header>
    <main>

      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition name="fade" mode="out-in">
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback>
                <LoaderView />
              </template>
            </Suspense>
          </Transition>
        </template>
      </RouterView>
    </main>
    <footer>
      created by - <strong> Jan Bergsma </strong> - devChallenges.io
    </footer>
  </div>
</template>

