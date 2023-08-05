<template>
    <Banner />
    <MainProject :cards="projectData"/>
    <MainCounter :counters="counterData"/>
    <MainBlog />
</template>

<script>
import Banner from './Banner.vue';
import MainProject from './MainProject.vue';
import MainCounter from './MainCounter.vue';
import MainBlog from './MainBlog.vue'

export default {
  name: 'mainpage',
  components: {
    Banner,
    MainProject,
    MainCounter,
    MainBlog
  },
  data() {
    return {
        counterData: [
            {
                number: 12,
                property: 'Years Of Experience',
                isVisibleLine: true
            },
            {
                number: 85,
                property: 'Success Projects',
                isVisibleLine: true
            },
            {
                number: 15,
                property: 'Active Projects',
                isVisibleLine: true
            },
            {
                number: 95,
                property: 'Happy Customers',
                isVisibleLine: false
            }
        ],
        projectData: [
            {
                id: 'product1',
                image: 'Product1.png',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'product2',
                image: 'Product2.png',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'product3',
                image: 'Product3.png',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'product4',
                image: 'Product4.png',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
        ]
    }
  }
}
</script>