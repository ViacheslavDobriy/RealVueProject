<template>
    <article class="blog">
        <header class="blog__header">
            <h2 class="blog__headerTitle">Articles & News</h2>
            <p class="blog__headerDescription">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </header>
        <div class="blog__designs">
            <BlogCard v-for="card in getDesignData.slice(0,3)" :key="card.id" :card="card"/>
        </div>
    </article>
</template>
<script>
import { mapGetters } from 'vuex';
import BlogCard from './BlogCard.vue';
export default {
    name: 'MainBlog',
    components: {
    BlogCard
    },
    computed: {
        ...mapGetters(['getDesignData'])
    }
}
</script>