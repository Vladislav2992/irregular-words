import { defineStore } from 'pinia'
import wordsList from './words.json'

export const useWordsStore = defineStore('words', () => {
  const words = [...new Set(wordsList)]

  return { words }
})
