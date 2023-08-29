<template>
    <article class="news">
        <h2 class="news__title">Articles & News</h2>
        <div class="news__designs-box">
            <RouterLink to="/blogDetails" class="blog__borderBox" v-for="design in getBlogCardsData" :key="design.id">
                <div class="blog__content">
                    <div class="blog__photo-box">
                        <img :src="require(`@/assets/imgs/blog/${design.image}`)" alt="photo of design" class="blog__design">
                        <div class="blog__label">
                            <p class="blog__label-text">{{design.labelText}}</p>
                        </div>
                    </div>
                    <div class="blog__description">
                        <h3 class="blog__title">{{design.title}}</h3>
                        <footer class="blog__footer">
                            <p class="blog__date">{{design.date}}</p>
                            <RouterLink to="/blogDetails" class="blog__link">
                                <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </RouterLink>
                        </footer>
                    </div>
                </div>
            </RouterLink>
        </div>
    </article>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ArticlesNews',
    computed: {
        ...mapGetters(['getBlogCardsData'])
    }
}
</script>