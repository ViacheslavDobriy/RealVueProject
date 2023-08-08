<template>
    <div class="projectTager">
        <div class="projectTager__buttons">
            <button class="projectTager__button" v-for="button in buttonNames" :key="button.id" @click="setChapter(button)">{{ button }}</button>
        </div>
        <div class="projectTager__gallery">
            <ProjectCard v-for="card in this.currentChapter.cards" :key="card.id" :card="card" :imagePath="currentChapter.chapter"/>
        </div>
        <Pagination />
    </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue';
import Pagination from './Pagination.vue';
// import { mapGetters } from 'vuex';
export default {
    name: 'ProjectTager',
    components: {
        ProjectCard,
        Pagination
    },
    data() {
        return {
            buttonNames: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
            cardsData: [
                {
                chapter: 'bedroom',
                cards: [
                {
                    id: 'card1',
                    span: 3,
                    image: 'card1.png',
                    title: 'Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card2',
                    span: 2,
                    image: 'card2.png',
                    title: 'Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card3',
                    span: 2,
                    image: 'card3.png',
                    title: 'Classic Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card4',
                    span: 3,
                    image: 'card4.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card5',
                    span: 3,
                    image: 'card5.png',
                    title: 'Minimal Bedroom table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card6',
                    span: 2,
                    image: 'card6.png',
                    title: 'System Table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card7',
                    span: 2,
                    image: 'card7.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card8',
                    span: 2,
                    image: 'card8.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                }
                    ]
                },
                {
                chapter: 'bathroom',
                cards: [
                {
                    id: 'card1',
                    span: 3,
                    image: 'card1.jpeg',
                    title: 'Minimal Bathroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card2',
                    span: 2,
                    image: 'card2.jpeg',
                    title: 'Minimal Bathroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card3',
                    span: 2,
                    image: 'card3.jpeg',
                    title: 'Classic Minimal Bathroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card4',
                    span: 3,
                    image: 'card4.webp',
                    title: 'Modern Bathroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card5',
                    span: 3,
                    image: 'card5.jpeg',
                    title: 'Minimal Bathroom table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card6',
                    span: 2,
                    image: 'card6.jpeg',
                    title: 'System Table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card7',
                    span: 2,
                    image: 'card7.jpeg',
                    title: 'Modern Bathroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card8',
                    span: 2,
                    image: 'card8.webp',
                    title: 'Modern Bathroom',
                    subTitle: 'Decor / Artchitecture'
                }
                    ]
                },
                {
                chapter: 'kitchen',
                cards: [
                {
                    id: 'card1',
                    span: 3,
                    image: 'card1.jpeg',
                    title: 'Minimal Kitchen',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card2',
                    span: 2,
                    image: 'card2.jpeg',
                    title: 'Minimal Kitchen',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card3',
                    span: 2,
                    image: 'card3.jpeg',
                    title: 'Classic Minimal Kitchen',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card4',
                    span: 3,
                    image: 'card4.jpeg',
                    title: 'Modern Kitchen',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card5',
                    span: 3,
                    image: 'card5.jpeg',
                    title: 'Minimal Kitchen table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card6',
                    span: 2,
                    image: 'card6.jpeg',
                    title: 'System Table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card7',
                    span: 2,
                    image: 'card7.jpeg',
                    title: 'Modern Kitchen',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card8',
                    span: 2,
                    image: 'card8.jpeg',
                    title: 'Modern Kitchen',
                    subTitle: 'Decor / Artchitecture'
                }
                    ]
                },
                {
                chapter: 'livingArea',
                cards: [
                {
                    id: 'card1',
                    span: 3,
                    image: 'card1.jpeg',
                    title: 'Minimal Living Area',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card2',
                    span: 2,
                    image: 'card2.jpeg',
                    title: 'Minimal Living Area',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card3',
                    span: 2,
                    image: 'card3.jpeg',
                    title: 'Classic Minimal Living Area',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card4',
                    span: 3,
                    image: 'card4.jpeg',
                    title: 'Modern Living Area',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card5',
                    span: 3,
                    image: 'card5.jpeg',
                    title: 'Minimal Living Area table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card6',
                    span: 2,
                    image: 'card6.webp',
                    title: 'System Table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card7',
                    span: 2,
                    image: 'card7.jpeg',
                    title: 'Modern Living Area',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card8',
                    span: 2,
                    image: 'card8.png',
                    title: 'Modern Living Area',
                    subTitle: 'Decor / Artchitecture'
                }
                    ]
                }
            ],
            currentChapter: {
                chapter: 'bedroom',
                cards: [
                {
                    id: 'card1',
                    span: 3,
                    image: 'card1.png',
                    title: 'Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card2',
                    span: 2,
                    image: 'card2.png',
                    title: 'Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card3',
                    span: 2,
                    image: 'card3.png',
                    title: 'Classic Minimal Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card4',
                    span: 3,
                    image: 'card4.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card5',
                    span: 3,
                    image: 'card5.png',
                    title: 'Minimal Bedroom table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card6',
                    span: 2,
                    image: 'card6.png',
                    title: 'System Table',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card7',
                    span: 2,
                    image: 'card7.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                },
                {
                    id: 'card8',
                    span: 2,
                    image: 'card8.png',
                    title: 'Modern Bedroom',
                    subTitle: 'Decor / Artchitecture'
                }
                ]
            }
        }
    },
    methods: {
        // ...mapGetters(['getCardsData']),
        setChapter(buttonName) {
            switch (buttonName) {
                case 'Bedroom':
                    this.currentChapter = this.cardsData.at(0);
                    break;
                case 'Bathroom':
                    this.currentChapter = this.cardsData.at(1);
                    break;
                case 'Kitchen':
                    this.currentChapter = this.cardsData.at(2);
                    break;
                case 'Living Area':
                    this.currentChapter = this.cardsData.at(3);
                    break;
            }
        }
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