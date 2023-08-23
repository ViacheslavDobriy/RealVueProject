<template>
    <SubHeader :posterData="getPostersData.find((item) => item.id === 'blogPoster')"/>
    <LatestPost />
    <ArticlesNews />
    <Pagination />
</template>
<script>
import SubHeader from '@/components/SubHeader.vue'
import LatestPost from '../components/blogPage/LatestPost.vue'
import ArticlesNews from '../components/blogPage/ArticlesNews.vue'
import Pagination from '@/components/Pagination.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'BlogPage',
    components: {
        SubHeader,
        LatestPost,
        ArticlesNews,
        Pagination
    },
    computed: {
        ...mapGetters(['getPostersData'])
    }
}
</script>