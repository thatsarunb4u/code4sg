<template>
  <div id="app">
    <div class="container">
      <div class="notification">
        <SearchBoxMain />
        <SearchResults />
      </div>
    </div>
    
  </div>
</template>

<script>
import SearchBoxMain from './components/SearchBoxMain'
import SearchResults from './components/SearchResults'

export default {
  name: 'App',
  components: {
    SearchBoxMain, SearchResults
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /*  text-align: center; */
  color: #2c3e50;
  /*size: 50em;*/
}
</style>
