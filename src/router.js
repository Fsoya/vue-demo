export default (router) => {
  router.map({
    '/': {
      name: 'list',
      component: function (resolve) {
        require(['./views/vList.vue'], resolve)
      }
    },
    '*': {
      component: function (resolve) {
        require(['./views/vList.vue'], resolve)
      }
    },
    '/list': {
      name: 'list',
      component: function (resolve) {
        require(['./views/vList.vue'], resolve)
      }
    },
    '/topic/:id': {
      name: 'topic',
      component: function (resolve) {
        require(['./views/vTopic.vue'], resolve)
      }
    },
    '/user/:author_id': {
      name: 'user',
      component: function (resolve) {
        require(['./views/vBar.vue'], resolve)
      }
    }
  })
}
