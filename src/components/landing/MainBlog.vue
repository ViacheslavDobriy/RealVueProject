<template>
    <article class="blog">
        <header class="blog__header">
            <h2 class="blog__headerTitle">Articles & News</h2>
            <p class="blog__headerDescription">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </header>
        <div class="blog__designs">
            <BlogCard v-for="card in cards" :key="card.id" :card="card"/>
        </div>
    </article>
</template>
<script>
import BlogCard from './BlogCard.vue';
export default {
    name: 'MainBlog',
    components: {
    BlogCard
},
    data() {
        return {
            cards: [
                {
                    image: 'Design1.png',
                    labelText: 'Kitchen Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December, 2022'
                },
                {
                    image: 'Design2.png',
                    labelText: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 September, 2022'
                },
                {
                    image: 'Design3.png',
                    labelText: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December, 2022'
                }
            ]
        }
    }
}
</script>