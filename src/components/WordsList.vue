<script setup lang="ts">
interface IWord {
  infinitive: string
  past_simple: string
  past_participle: string
  translation: string
}

defineProps<{
  words: IWord[]
}>()
</script>

<template>
  <div v-if="words.length > 0" v-for="word in words" class="row">
    <span>{{ word.infinitive }}</span>
    <span>{{ word.past_simple }}</span>
    <span>{{ word.past_participle }}</span>
    <span>{{ word.translation }}</span>
  </div>
  <div v-else class="empty">empty 😕</div>
</template>

<style scoped lang="sass">
@use '../assets/_vars' as *
.row
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1.5fr
  padding: 8px 16px
  margin-bottom: 12px
  border: 1px solid $white
  border-radius: 16px
  box-shadow: 0 0 5px rgba(255,255,255, .5)
  background-color: $white
  color: $dark

.empty
  color: $white
  text-align: center
  font-size: 48px
  font-weight: 700
  margin-top: 12px
</style>
