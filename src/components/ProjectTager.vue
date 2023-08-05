<template>
    <div class="projectTager">
        <div class="projectTager__buttons">
            <button class="projectTager__button" v-for="button in buttonNames" :key="button.id">{{ button }}</button>
        </div>
        <div class="projectTager__gallery">
            <ProjectCard v-for="card in cards" :key="card.id" :card="card"/>
        </div>
        <div class="pagination">
            
        </div>
    </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectTager',
    components: {
        ProjectCard
    },
    data() {
        return {
            buttonNames: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
            cards: [
                {
                    id: 'card1',
                    image: 'card1.png',
                    title: 'Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card2',
                    image: 'card2.png',
                    title: 'Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card3',
                    image: 'card3.png',
                    title: 'Classic Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card4',
                    image: 'card4.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card5',
                    image: 'card5.png',
                    title: 'Minimal Bedroom table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card6',
                    image: 'card6.png',
                    title: 'System Table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card7',
                    image: 'card7.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card8',
                    image: 'card8.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
            ]
        }
    }
}
</script>
<style lang="scss">

.projectTager {
    padding-top: 200px;
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
        grid-template-columns: repeat(2, 434px);
        justify-content: space-between;
        gap: 32px;
    }
}
</style>