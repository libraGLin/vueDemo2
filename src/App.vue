<template>
  <div id="app">
    <!-- <div id="nav">
      <img src="http://10.221.1.49:2401/file_service/record/kibh/stk/W020181009483851056006.jpg" alt="">
    </div> -->
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'APP',
}
</script>

<style lang="scss">
html,body {
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;
  }
}
</style>
