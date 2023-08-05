<template>
  <div class="content center">
    <headerVue />
    <SubHeader />
    <ProjectTager />
    <footerVue />
  </div>
</template>

<script>
import footerVue from './components/footer.vue'
import headerVue from './components/header.vue'
import mainpageVue from './components/landing/mainpage.vue'
import SubHeader from './components/SubHeader.vue'
import ProjectTager from './components/ProjectTager.vue'

export default {
  name: 'App',
  components: {
    headerVue,
    footerVue,
    mainpageVue,
    SubHeader,
    ProjectTager
  }
}
</script>
