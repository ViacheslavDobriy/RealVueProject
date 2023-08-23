<template>
    <Banner />
    <MainProject :cards="getMainPageProjectData"/>
    <MainCounter :counters="getMainPageCounterData"/>
    <MainBlog />
</template>

<script>
import Banner from '../components/landing/Banner.vue';
import MainProject from '../components/landing/MainProject.vue';
import MainCounter from '../components/landing/MainCounter.vue';
import MainBlog from '../components/landing/MainBlog.vue'
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