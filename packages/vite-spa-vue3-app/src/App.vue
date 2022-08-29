<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { 
  ContentPlaceholders, 
  ContentPlaceholdersHeading, 
  ContentPlaceholdersImg, 
  ContentPlaceholdersText 
} from '@wynn719/vue-content-placeholders'
import '@wynn719/vue-content-placeholders/dist/style.css'
</script>

<template>
  <ContentPlaceholders>
    <ContentPlaceholdersHeading :img="true" />
    <ContentPlaceholdersText :lines="3" />
  </ContentPlaceholders>

  <br>

  <ContentPlaceholders :rounded="true">
    <ContentPlaceholdersImg />
    <ContentPlaceholdersHeading />
  </ContentPlaceholders>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
