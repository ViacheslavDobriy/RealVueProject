<template>
    <div class="content">
        <h1 class="title">{{ this.article.title }}</h1>
        <div class="description">
            <p class="articleText" v-for="text in this.article.description" :key="text.id">{{ text }}</p>
        </div>
    </div>
    <div class="gallery">

        <swiper :modules="modules" :zoom="true" :pagination="{ clickable: true, dynamicBullets: true }" :slides-per-view="1" :space-between="50" class="swiper">
            <swiper-slide v-for="pic in article.photos" :key="pic.id">
                <div class="swiper-zoom-container">
                    <img :src="require(`@/assets/imgs/projectDetails/${pic}`)" alt="project 1"
                        class="image">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>

import { Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export default {
    name: 'ProjectArticle',
    props: {
        article: Object
    },
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, Zoom]
        };
    },

};

</script>
<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 631px;
    align-items: flex-start;
}

.title {
    color: #292F36;
    text-align: left;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.articleText {
    text-decoration: none;
    color: #4D5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.description {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.gallery {
    padding: 100px 0;
}

.image {
    width: 900px;
    border-radius: 70px;
}


.swiper {
    width: 900px;
    text-align: center;
}
</style>