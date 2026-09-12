<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import WordsList from './components/WordsList.vue'
import { useSearchState } from '@/stores/search.ts'
import { storeToRefs } from 'pinia'
import { useWordsStore } from '@/stores/words'

const { words } = useWordsStore()
const searcState = useSearchState()
const { searchValue } = storeToRefs(searcState)

const sorted = [...words].sort((a, b) => a.infinitive.localeCompare(b.infinitive))

const wordsList = () => {
  return sorted.filter(
    (item) =>
      item.infinitive.includes(searchValue.value) || item.translation.includes(searchValue.value),
  )
}
</script>

<template>
  <AppHeader />
  <div class="container">
    <WordsList :words="wordsList()" />
  </div>
</template>

<style scoped></style>
