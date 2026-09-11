<script setup lang="ts">
import { useSearchState } from '@/stores/search'
import { storeToRefs } from 'pinia'

defineProps<{
  placeholder: string
}>()

const searchState = useSearchState()
const { searchValue } = storeToRefs(searchState)
</script>

<template>
  <div class="search">
    Search
    <input type="text" class="search-input" v-model.trim="searchValue" :placeholder />
  </div>
</template>

<style scoped lang="sass">
@use '../assets/_vars' as *

.search
  display: flex
  align-items: center
  gap: 10px
  font-weight: 600
  font-size: 24px

.search-input
  width: 100%
  padding: 12px 16px
  border: 1px solid $white
  border-radius: 16px
  background-color: $white
</style>
