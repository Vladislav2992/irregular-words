import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchState = defineStore('search', () => {
  const searchValue = ref('')
  return { searchValue }
})
