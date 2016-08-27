const prefix = '/api/v1'
export default class API {
  constructor (http) {
    this.$http = http
  }
  getTopics (opt) {
    return this.$http.get(prefix + '/topics?page=' + opt.page)
  }
  getTopicById (opt) {
    return this.$http.get(prefix + '/topic/' + opt.id)
  }
  newTopic (body, opt) {
    return this.$http.post(prefix + '/topics', body, opt)
  }
  collect (body, opt) {
    return this.$http.post(prefix + '/topic_collect/collect', body, opt)
  }
  deCollect (body, opt) {
    return this.$http.post(prefix + '/topic_collect/de_collect', body, opt)
  }
  getUserCollect (opt) {
    return this.$http.get(prefix + '/topic_collect/' + opt.loginName)
  }
  newRelay (body, opt) {
    return this.$http.post(prefix + '/topic/' + opt.topicId + '/replies', body)
  }
  replyUps (body, opt) {
    return this.$http.post(prefix + '/reply/' + opt.replyId + '/ups', body)
  }
  getUser (opt) {
    return this.$http.get(prefix + '/user/' + opt.loginName)
  }
  accesstoken (body) {
    return this.$http.post(prefix + '/accesstoken', body)
  }
  getMessageCount (opt) {
    return this.$http.get(prefix + '/message/count', opt)
  }
  getMessages (opt) {
    return this.$http.get(prefix + '/messages', opt)
  }
  markAll (body) {
    return this.$http.post(prefix + '/message/mark_all', body)
  }
}
