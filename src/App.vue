<template>
  <div class="content center">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>
<!-- <script>

// import MainPage from './views/MainPage.vue'
import ProjectTagerPage from './views/ProjectTagerPage.vue'
import BlogPage from './views/BlogPage.vue'
import BlogDetailsPage from './views/BlogDetailsPage.vue'
import ProjectDetailsPage from './views/ProjectDetailsPage.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    // MainPage,
    ProjectTagerPage,
    BlogPage,
    BlogDetailsPage,
    ProjectDetailsPage
  }
}
</script> -->
