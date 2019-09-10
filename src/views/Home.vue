<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="handleClick">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  font-size: 14px;
}
</style>
