import Vue from 'vue'
import Component from './notification'

const NotificationConstructor = Vue.extend(Component)

let instances = []
let seed = 1

const notify = (options) => {
  const { autoClose, ...rest } = options

  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notification_${seed++}`
  instance.id = id

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0

  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  instance.$on('close', () => {
    instance.vm.visible = false
  })
  instances.push(instance)
  return instance.vm
}

const removeInstance = (instance) => {
  if (!instance) return
  let len = instances.length
  const index = instances.findIndex(item => {
    return item.id === instance.id
  })
  instances.splice(index, 1)
  if (len <= 1) return
  const h = instance.vm.height
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset - h - 16)
  }
}

export default notify
