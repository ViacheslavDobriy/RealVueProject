import { createStore } from 'vuex'

export default createStore({
    state: {
        links: [
            {
                href: '#',
                class: 'header__link',
                content: 'Home'
            },
            {
                href: '#',
                class: 'header__link',
                content: 'Project'
            },
            {
                href: '#',
                class: 'header__link',
                content: 'Blog'
            },
            {
                href: '#',
                class: 'footer__link',
                content: 'Home'
            },
            {
                href: '#',
                class: 'footer__link',
                content: 'Project'
            },
            {
                href: '#',
                class: 'footer__link',
                content: 'Blog'
            }
        ],
        projectPageCardsData: [
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
        ProjectPageButtons: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
        selectedChapter: 'Bedroom',
        postersData: [
            {
                title: 'Our Project',
                breadcrumbs: 'Home / Project'
            },
            {
                title: 'Articles & News',
                breadcrumbs: 'Home / Blog'
            }
        ],
        designData: [
            {
                image: "Design1.png",
                labelText: "Kitchen Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022"
            },
            {
                image: "Design2.png",
                labelText: "Living Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022"
            },
            {
                image: "Design3.png",
                labelText: "Interior Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022"
            },
            {
                image: "Design4.png",
                labelText: "Kitchen Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022"
            },
            {
                image: "Design5.png",
                labelText: "Living Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022"
            },
            {
                image: "Design6.png",
                labelText: "Interior Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022",
                texts: [
                    'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.',
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                ]
            }
        ]
    },
    mutations: {
        changeSelectedChapter(state, chapter) {
            state.selectedChapter = chapter;
        }
    },
    getters: {
        getHeaderLinks: state => {
            return state.links.filter((link) => link.class === 'header__link');
        },
        getFooterLinks: state => {
            return state.links.filter((link) => link.class === 'footer__link')
        },
        getProjectPageButtons: state => {
            return state.ProjectPageButtons;
        },
        getCardsData: state => {
            return state.projectPageCardsData;
        },
        getSelectedCard: state => {
            if (state.selectedChapter === 'Living Area') {
                return state.projectPageCardsData.find((card) => card.chapter === 'livingArea');
            }
            return state.projectPageCardsData.find((chapter) => chapter.chapter === state.selectedChapter.toLowerCase());
        },
        getPostersData: state => {
            return state.postersData;
        },
        getDesignData: state => {
            return state.designData;
        },
        getLastDesignData: state => {
            return state.designData.slice(-1).at(0);
        }
    }
})