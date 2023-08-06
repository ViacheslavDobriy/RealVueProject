<template>
  <div class="content center">
    <AppHeader />
    <SubHeader />
    <ProjectTager />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import mainpageVue from './components/landing/mainpage.vue'
import SubHeader from './components/SubHeader.vue'
import ProjectTager from './components/ProjectTager.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    mainpageVue,
    SubHeader,
    ProjectTager
  }
}
</script>
