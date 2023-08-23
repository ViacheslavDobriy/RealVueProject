<template>
    <SubHeader :posterData="getPostersData.find((item) => item.id === 'projectDetailsPoster')" />
    <ProjectArticle :article="getProjectArticleData" />
</template>
<script>

import SubHeader from '@/components/SubHeader.vue'
import ProjectArticle from '@/components/projectDetailsPage/ProjectArticle.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ProjectDetails',
    components: {
        SubHeader,
        ProjectArticle
    },
    computed: {
        ...mapGetters(['getPostersData', 'getProjectArticleData'])
    }
}
</script>