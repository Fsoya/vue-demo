<template>
  <div id="app">
    <sheader></sheader>
    <router-view></router-view>
  </div>
</template>

<script>
import SHeader from './components/Header'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default {
  components: {
    sheader: SHeader
  },
  ready: function () {
    NProgress.render()
  }
}
</script>

<style>
  html {
  height: 100%;
}

body {
  display: flex;
  height: 100%;
}

#app {
  color: #2c3e50;
  width: 100%;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
