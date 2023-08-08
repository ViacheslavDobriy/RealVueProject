<template>
    <div class="projectTager">
        <div class="projectTager__buttons">
            <button class="projectTager__button" v-for="button in this.getProjectPageButtons()" :key="button.id" @click="setChapter(button)">{{ button }}</button>
        </div>
        <div class="projectTager__gallery">
            <ProjectCard v-for="card in this.getSelectedCard.cards" :key="card.id" :card="card" :imagePath="getSelectedCard.chapter"/>
        </div>
        <Pagination />
    </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue';
import Pagination from './Pagination.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'ProjectTager',
    components: {
        ProjectCard,
        Pagination
    },
    methods: {
        ...mapMutations(['changeSelectedChapter']),
        ...mapGetters(['getCardsData', 'getProjectPageButtons']),
        setChapter(buttonName) {
            this.changeSelectedChapter(buttonName);
            switch (buttonName) {
                case 'Bedroom':
                    this.currentChapter = this.$store.getters.getCardsData.filter((item) => item.chapter === 'bedroom').at(0);
                    break;
                case 'Bathroom':
                    this.currentChapter = this.$store.getters.getCardsData.filter((item) => item.chapter === 'bathroom').at(0);
                    break;
                case 'Kitchen':
                    this.currentChapter = this.$store.getters.getCardsData.filter((item) => item.chapter === 'kitchen').at(0);
                    break;
                case 'Living Area':
                this.currentChapter = this.$store.getters.getCardsData.filter((item) => item.chapter === 'livingArea').at(0);
                    break;
            }
        }
    },
    computed: {
        ...mapGetters(['getSelectedCard'])
    }
}
</script>
<style lang="scss">

.projectTager {
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    width: -webkit-fill-available;
    &__buttons {
        display: flex;
        flex-direction: row;
    }
    &__button {
        padding: 26px 66px;
        border: none;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
        background-color: white;
        cursor: pointer;
        border-radius: 18px;
        transition: 0.3s;
        &:hover {
            color: white;
            background-color: #CDA274;
        }
    }
    &__gallery {
        display: grid;
        grid-template-columns: 434px 434px;
        grid-template-rows: repeat(1,243.3px);
        justify-content: space-between;
        grid-row-gap: 16px;
    }
}
</style>