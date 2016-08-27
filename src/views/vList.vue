<template>
  <div>
    <div></div>
    <div class="list-group">
      <a v-for="topic in topics" class="list-group-item topic-item" :class="{ 'list-group-item-success': topic.good, 'list-group-item-info': topic.tab == 'share', 'list-group-item-warning': topic.tab == 'ask', 'list-group-item-danger': topic.tab == 'job' }" >
        <image @click="toUserInfo(topic.author_id)" :src="topic.author.avatar_url" class="avatar"/>
        <span class="bage">{{topic.reply_count + ' / ' + topic.visit_count}}</span>
        <span class="title">{{topic.title}}</span>
        <span class="last-time">{{topic.last_reply_at|getLastTimeStr true}}</span>
      </a>
      <a class="list-group-item text-center" @click="loadMore()" :class="{ 'disabled' : loadLabel=='loading'}">
        {{loadLabel}}
      </a>
    </div>
  </div>
</template>
<style scoped>
  .topic-item{
    display: flex;
  }
  .avatar{
    width: 30px;
    height: 30px;
    min-width: 30px;
    cursor: pointer;
  }
  .bage{
    padding:0 10px;
    width: 130px;
    display: inline-block;
  }
  .title{
    display: inline-block;
    width: 100%;
  }
  .last-time{
    width: 100px;
    padding: 0 10px;
  }
</style>
<script>
import NProgress from 'nprogress'
import API from '../api/api'
let napi
export default {
  data () {
    return {
      topics: [],
      page: 1,
      loadLabel: 'more'
    }
  },
  ready: function () {
    napi = new API(this.$http)
    NProgress.start()
    napi.getTopics({page: this.page}).then(response => {
      this.$set('topics', this.topics.concat(response.json().data))
      NProgress.done()
    })
  },
  methods: {
    toUserInfo: function (authorId) {
      this.$router.go({name: 'user', params: { author_id: authorId }})
    },
    loadMore: function () {
      if (this.loadLabel === 'loading') return
      this.page ++
      this.loadLabel = 'loading'
      napi.getTopics({page: this.page}).then(response => {
        this.$set('topics', this.topics.concat(response.json().data))
        this.loadLabel = 'more'
      })
    }
  }
}
</script>
