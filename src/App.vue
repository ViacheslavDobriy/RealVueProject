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
