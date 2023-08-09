<template>
    <Banner />
    <MainProject :cards="getMainPageProjectData"/>
    <MainCounter :counters="getMainPageCounterData"/>
    <MainBlog />
</template>

<script>
import Banner from './Banner.vue';
import MainProject from './MainProject.vue';
import MainCounter from './MainCounter.vue';
import MainBlog from './MainBlog.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'mainpage',
  components: {
    Banner,
    MainProject,
    MainCounter,
    MainBlog
  },
  computed: {
    ...mapGetters(['getMainPageProjectData', 'getMainPageCounterData'])
  },
}
</script>