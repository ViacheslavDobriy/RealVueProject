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
  }
};
</script>
