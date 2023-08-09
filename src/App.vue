<template>
  <div class="content center">
    <AppHeader />
    <mainpageVue />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import mainpageVue from './components/landing/mainpage.vue'
import ProjectTager from './components/ProjectTager.vue'
import BlogPage from './components/blogPage/BlogPage.vue'
import BlogDetails from './components/blogDetailsPage/BlogDetails.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    mainpageVue,
    ProjectTager,
    BlogPage,
    BlogDetails
  }
}
</script>
