<template>
    <article class="last-post">
        <h2 class="last-post__title">Latest Post</h2>
        <RouterLink to="/blogDetails" class="last-post__content">
            <img :src="require(`@/assets/imgs/blog/${getLastBlogCardData.image}`)" alt="Photo of design"
                class="last-post__image">
            <div class="last-post__description">
                <h3 class="last-post__subtitle">{{ getLastBlogCardData.title }}</h3>
                <p class="last-post__text" v-for="text in getLastBlogCardData.texts" :key="text.id">{{ text }}</p>
                <div class="last-post__footer">
                    <p class="last-post__date">{{ getLastBlogCardData.date }}</p>
                    <p class="last-post__to">
                        <svg width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </p>
                </div>
            </div>
        </RouterLink>
    </article>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LatestPost',
    computed: {
        ...mapGetters(['getBlogCardsData', 'getLastBlogCardData']) // может удалить getBlogCardsData?
    }
}
</script>