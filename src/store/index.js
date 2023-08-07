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
        ]
    },
    getters: {
        getHeaderLinks: state => {
            return state.links.filter((link) => link.class === 'header__link');
        },
        getFooterLinks: state => {
            return state.links.filter((link) => link.class === 'footer__link')
        },
        getCardsData(state, title) {
            console.log(title);
            switch (title) {
                case 'Bedroom':
                    console.log(state.projectPageCardsData.find((card) => card.chapter === 'bedroom'));
                    return state.projectPageCardsData.at(0);
                    break;
                case 'Bathroom':
                    return state.projectPageCardsData.at(1);
                    break;
                case 'Kitchen':
                    return state.projectPageCardsData.at(2);
                    break;
                case 'Living Area':
                    return state.projectPageCardsData.at(3);
                    break;
            }
        }
    }
})