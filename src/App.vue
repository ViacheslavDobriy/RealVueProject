<template>
  <div class="content center">
    <headerVue />
    <mainpageVue />
    <footerVue />
  </div>
</template>

<script>
import footerVue from './components/footer.vue'
import headerVue from './components/header.vue'
import mainpageVue from './components/mainpage.vue'

export default {
  name: 'App',
  components: {
    headerVue,
    footerVue,
    mainpageVue
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

body {
    overflow-x: hidden;
}

.center {
    padding-left: 18.75%;
    padding-right: 18.75%;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
