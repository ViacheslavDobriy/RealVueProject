<template>
    <SubHeader :posterData="getPostersData.find((item) => item.id === 'projectPoster')" />
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
import ProjectCard from '../components/ProjectCard.vue';
import Pagination from '../components/Pagination.vue';
import SubHeader from '../components/SubHeader.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: 'ProjectTager',
    components: {
        ProjectCard,
        Pagination,
        SubHeader
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
        ...mapGetters(['getSelectedCard', 'getPostersData'])
    }
}
</script>