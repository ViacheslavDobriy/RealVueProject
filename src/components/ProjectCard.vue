<template>
    <div class="project__product" :id="card.id">
        <img class="project__productPhoto" :src="require(`@/assets/imgs/projectPage/${imagePath}/${card.image}`)" alt="kitchen's photo">
        <div class="project__star">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none" @click="changeIsStarred({ chapter: imagePath, id: id})" :class="classStar">
                <g filter="url(#filter0_d_993_156)">
                    <path d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z" fill="#F4F0EC"/>
                </g>
                <defs>
                    <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="project__details">
            <div class="project__productText">
                <h3 class="project__productTitle"> {{ card.title }}</h3>
                <p class="project__productDescription">{{ card.subTitle }}</p>
            </div>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'ProjectCard',
    props: {
        card: Object,
        imagePath: String
    },
    data() {
        return {
            id: this.card.id,
            cardLocal: this.card
        }
    },
    methods: {
    ...mapMutations(['changeIsStarred']),
    ...mapGetters(['getSelectedItem'])
    },
    computed: {
        classStar() {
            return {
                isSelected: this.$store.getters.getSelectedItem(this.id).isStarred
            }
        }
    }
}
</script>
<style scoped lang="scss">
.project {
    &__product {
        position: relative;
    }
    &__star {
        position: absolute;
        right: 0%;
        svg g {
            cursor: pointer;
            &:hover path {
                fill: #FFA928;
            }
        } 
    }
}
.isSelected g path {
    fill: #FFA928;
}
#card1 {
    grid-row: span 3;
}
#card2 {
    grid-row: span 2;
}
#card3 {
    grid-row: span 2;
}
#card4 {
    grid-row: span 3;
}
#card5 {
    grid-row: span 3;
}
#card6 {
    grid-row: span 2;
}
#card7 {
    grid-row: span 2;
}
#card8 {
    grid-row: span 2;
}
</style>