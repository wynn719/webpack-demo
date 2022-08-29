<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { 
  ContentPlaceholders, 
  ContentPlaceholdersHeading, 
  ContentPlaceholdersImg, 
  ContentPlaceholdersText 
} from '@wynn719/vue-content-placeholders'
import '@wynn719/vue-content-placeholders/dist/style.css'
import HelloWorld from './components/HelloWorld.vue';
import Tsx from './components/Tsx';

console.log({ 
  ContentPlaceholders, 
  ContentPlaceholdersHeading, 
  ContentPlaceholdersImg, 
  ContentPlaceholdersText,
  HelloWorld
})

export default {
  components: {
    HelloWorld,
    Tsx,
    ContentPlaceholders, 
    ContentPlaceholdersHeading, 
    ContentPlaceholdersImg, 
    ContentPlaceholdersText 
  }
}
</script>

<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
    <Tsx></Tsx>

    <ContentPlaceholders>
      <!-- <ContentPlaceholdersHeading :img="true" />
      <ContentPlaceholdersText :lines="3" /> -->
    </ContentPlaceholders>

    <br>

    <ContentPlaceholders :rounded="true">
      <ContentPlaceholdersImg />
      <ContentPlaceholdersHeading />
    </ContentPlaceholders>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
