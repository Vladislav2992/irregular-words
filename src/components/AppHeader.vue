<script setup lang="ts">
import AppSearch from './AppSearch.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <h1 class="title">Irregular verbs</h1>

      <AppSearch placeholder="Поиск по инфинитиву или по переводу" />
    </div>
  </header>
</template>

<style scoped lang="sass">
@use '../assets/_vars' as *

.header
  padding: 20px 0
  margin-bottom: 40px
  position: sticky
  top: 0
  width: 100%
  box-shadow: 0 6px 4px rgba(0,0,0, .1)
  background: $dark
  color: $white
.title
  font-size: 60px
  font-weight: 700
  text-align: center
  margin-bottom: 20px
</style>
