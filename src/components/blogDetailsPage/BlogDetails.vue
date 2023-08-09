<template>
    <SubHeader :posterData="this.getPostersData().find((item) => item.id === 'blogDetailsPoster')"/>
    <article class="details">
        <div class="details__content">
            <div class="details__content_first">
                <h1 class="details__title">{{ getSelectedBlogDetailsPage.box1.title }}</h1>
                <div class="details__subContent">
                    <img :src="require(`@/assets/imgs/blogDetails/${getSelectedBlogDetailsPage.box1.image}`)" alt="photo of kitchen" class="details__image">
                    <div class="details__dateBreadcrumbsBox">
                        <p class="details__date">{{ getSelectedBlogDetailsPage.box1.date}}</p>
                        <p class="details__breadcrumbs">
                            <a href="#" class="details__breadcrumb">Interior</a> /
                            <a href="#" class="details__breadcrumb">Home</a> /
                            <a href="#" class="details__breadcrumb">Decore</a>
                        </p>
                    </div>
                </div>
                <div class="details__textBox">
                    <p class="details__text" v-for="text in getSelectedBlogDetailsPage.box1.texts" :key="text.id">{{ text }}</p>
                </div>
            </div>
            <div class="details__quotesBox">
                <div class="details__quotes">
                    <p class="details__quote">“</p>
                    <p class="details__quoteText">{{getSelectedBlogDetailsPage.quote}}</p>
                </div>
            </div>
            <div class="details__content_second">
                <h1 class="details__title">{{getSelectedBlogDetailsPage.box2.title}}</h1>
                <p class="details__text">{{getSelectedBlogDetailsPage.box2.texts[0]}}</p>
                <ol class="details__points">
                    <li class="details__point details__text" v-for="list in getSelectedBlogDetailsPage.box2.lists" :key="list.id"><span class="blackColorText">{{ list }}</span></li>
                </ol>
                <img :src="require(`@/assets/imgs/blogDetails/${getSelectedBlogDetailsPage.box2.image}`)" alt="photo of kitchen" class="details__image details__image_withMargin">
                <p class="details__text">{{ getSelectedBlogDetailsPage.box2.texts[1] }}</p>
            </div>
        </div>
        <div class="tags">
            <h3 class="tags__title">{{ this.getBlogDetailsButtons().title }}</h3>
            <div class="tags__buttons">
                <button class="tags__button" v-for="button in this.getBlogDetailsButtons().buttonNames" :key="button.id" @click="changeBlogDetailsSelectedButton(button)">{{ button }}</button>
            </div>
        </div>
    </article>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import SubHeader from '@/components/SubHeader.vue'

export default {
    name: 'BlogDetails',
    components: {
        SubHeader
    },
    methods: {
        ...mapMutations(['changeBlogDetailsSelectedButton']),
        ...mapGetters(['getBlogDetailsButtons', 'getPostersData'])
    },
    computed: {
        ...mapGetters(['getSelectedBlogDetailsPage'])
    }
}
</script>