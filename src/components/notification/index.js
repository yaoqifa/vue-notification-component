import Notification from './notification.vue'
import notify from './instance'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
