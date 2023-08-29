<template>
    <article class="project">
        <header class="project__header">
            <h2 class="project__title">Follow Our Projects</h2>
            <p class="project__description">It is a long established fact that a reader will be distracted by the of
                readable content of page lookings at its layouts points.</p>
        </header>
        <div class="project__options">
            <div class="project__product" v-for="project in projectCards" :key="project.id">
                <img class="project__productPhoto" :id="project.cards[randomId].idMain"
                    :src="require(`@/assets/imgs/projectPage/${project.chapter}/${project.cards[randomId].image}`)"
                    alt="kitchen's photo">
                <div class="project__details">
                    <div class="project__productText">
                        <h3 class="project__productTitle"> {{ project.cards[randomId].title }}</h3>
                        <p>
                            <RouterLink :to="breadcrumb.linkTo" v-for="breadcrumb in project.cards[randomId].breadcrumbs"
                                :key="breadcrumb.id" @click="changeTitleCurrentArticle(project.cards[randomId].title)" class="project__productBreadcrumb">{{ breadcrumb.linkText }}</RouterLink>
                        </p>
                    </div>
                    <RouterLink to="/projectDetails" class="project__link"
                        @click="changeTitleCurrentArticle(project.cards[randomId].title)">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    name: 'MainProject',
    props: {
        projectCards: Array
    },
    data() {
        return {
            randomId: Math.floor(Math.random() * (this.projectCards[0].cards.length - 1))
        }
    },
    methods: {
        ...mapMutations(['changeTitleCurrentArticle'])
    }
}
</script>