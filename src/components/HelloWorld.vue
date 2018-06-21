<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button class="notify" @click="clickNotify">notification提示</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'a simple vue-notification component'
    }
  },
  methods: {
    clickNotify () {
      this.$notify({
        content: 'this is a notification'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.notify {
  background: #0dc2b3;
  color: #fff;
  border: none;
  padding: 7px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.notify:hover {
  opacity: .9;
}
</style>
