<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"
          @click='toggleMenu()'>
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">cnodejs</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div :class='{collapse:!showMenu}' class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="transition:all 0.5s">
        <ul class="nav navbar-nav navbar-right">
          <template v-if='user == null'>
          <li>
            <form class="navbar-form">
              <div class="form-group">
                <input v-model="accessToken" type="text" class="form-control" placeholder="AccessToken">
              </div>
              <button @click='signin()' class="btn btn-default">登录</button>
            </form>
          </li>
          </template>
          <template v-else>
          <li><a v-link="{path: '/list'}">未读消息</a></li>
          <li><a v-link="{path: '/bar'}">退出</a></li>
          </template>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import NProgress from 'nprogress'
import API from '../api/api'

export default {
  data: function () {
    return {
      showMenu: false,
      accessToken: ''
    }
  },
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu
    },
    signin: function () {
      let napi = new API(this.$http)
      NProgress.start()
      napi.accesstoken({accesstoken: this.accessToken})
      .then(response => {
        console.log(response)
        NProgress.done()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.header{
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(0,0,0,0.5);
  transition-property: all;
  transition-duration: 0.5s;
  top: 0px;
  transition-timing-function: ease
}
</style>
