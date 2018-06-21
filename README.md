# my-notification

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
首先 在入口文件 main.js中引用和注册为全局方法
```
import Notification from './components/notification'
Vue.use(Notification)
```
然后 在页面里使用，比如HelloWord组件，使用方法如下
```
 this.$notify({
    content: 'this is a notification'
  })
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
