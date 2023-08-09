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
                image: 'card1.webp',
                title: 'Minimal Bedroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card2',
                span: 2,
                image: 'card2.webp',
                title: 'Minimal Bedroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card3',
                span: 2,
                image: 'card3.webp',
                title: 'Classic Minimal Bedroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card4',
                span: 3,
                image: 'card4.webp',
                title: 'Modern Bedroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card5',
                span: 3,
                image: 'card5.webp',
                title: 'Minimal Bedroom table',
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
                image: 'card7.webp',
                title: 'Modern Bedroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card8',
                span: 2,
                image: 'card8.webp',
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
                image: 'card1.webp',
                title: 'Minimal Bathroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card2',
                span: 2,
                image: 'card2.webp',
                title: 'Minimal Bathroom',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card3',
                span: 2,
                image: 'card3.webp',
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
                image: 'card5.webp',
                title: 'Minimal Bathroom table',
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
                image: 'card7.webp',
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
                image: 'card1.webp',
                title: 'Minimal Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card2',
                span: 2,
                image: 'card2.webp',
                title: 'Minimal Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card3',
                span: 2,
                image: 'card3.webp',
                title: 'Classic Minimal Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card4',
                span: 3,
                image: 'card4.webp',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card5',
                span: 3,
                image: 'card5.webp',
                title: 'Minimal Kitchen table',
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
                image: 'card7.webp',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card8',
                span: 2,
                image: 'card8.webp',
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
                image: 'card1.webp',
                title: 'Minimal Living Area',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card2',
                span: 2,
                image: 'card2.webp',
                title: 'Minimal Living Area',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card3',
                span: 2,
                image: 'card3.webp',
                title: 'Classic Minimal Living Area',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card4',
                span: 3,
                image: 'card4.webp',
                title: 'Modern Living Area',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card5',
                span: 3,
                image: 'card5.webp',
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
                image: 'card7.webp',
                title: 'Modern Living Area',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'card8',
                span: 2,
                image: 'card8.webp',
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
                id: 'projectPoster',
                title: 'Our Project',
                breadcrumbs: 'Home / Project',
                isTitleExist: true
            },
            {
                id: 'blogPoster',
                title: 'Articles & News',
                breadcrumbs: 'Home / Blog',
                isTitleExist: true
            },
            {
                id: 'blogDetailsPoster',
                isTitleExist: false
            }
        ],
        designData: [
            {
                image: "Design1.webp",
                labelText: "Kitchen Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022"
            },
            {
                image: "Design2.webp",
                labelText: "Living Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022"
            },
            {
                image: "Design3.webp",
                labelText: "Interior Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022"
            },
            {
                image: "Design4.webp",
                labelText: "Kitchen Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022"
            },
            {
                image: "Design5.webp",
                labelText: "Living Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "22 December, 2022"
            },
            {
                image: "Design6.webp",
                labelText: "Interior Design",
                title: "Let’s Get Solution For Building Construction Work",
                date: "25 December, 2022",
                texts: [
                    'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.',
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.'
                ]
            }
        ],
        blogDetailsPageData: [
            {
                chapter: 'Kitchen',
                box1: {
                    title: `Let’s Get Solution for Building
                    Construction Work`,
                    image: `tagKitchen1.webp`,
                    date: `26 December, 2022`,
                    texts: [
                        `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                        randomised words which don't look even slightly believable.`,
                        `Embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                        necessary.`
                    ]
                },
                quote: `The details are not the details. They make the design.`,
                box2: {
                    title: `Design sprints are great`,
                    image: `tagKitchen2.webp`,
                    texts: [
                        `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.`,
                        `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.`
                    ],
                    lists: [
                        `Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered.`,
                        `Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered.`,
                        `Contrary to popular belief.There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered.`
                    ]
                }
            },
            {
                chapter: 'Bedroom',
                box1: {
                    title: `The Bedroom: Your Restful Retreat`,
                    image: `bedroom1.webp`,
                    date: `22 January, 2023`,
                    texts: [
                        `So much more than just where you sleep, today's bedrooms also serve as a home office, media room and a prime location for snuggling kids or pets. Bedrooms are also an excellent space for showing off your personal style. From Scandi to Farmhouse to Boho and every look in-between, our tips will help you make your bedroom a beautiful reflection of your style. Not sure if your look leans toward traditional or if cozy cottage is more your style — take our quiz, below, to find out.`,
                        `With crisp white walls, wood beams and black accents, this spacious main suite definitely achieves a fresh, modern farmhouse aesthetic. Buffalo check pillows, a brown leather sofa and a white oriental rug reinforce this look, as well as pull in some interest and warmth. And, appropriately enough, a chic black barn door grants access to the main bathroom.`
                    ]
                },
                quote: `Have no fear of perfection -- you’ll never reach it.`,
                box2: {
                    title: `Modern Farmhouse-Style Suite`,
                    image: `bedroom2.webp`,
                    texts: [
                        `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.`,
                        `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                        Ipsum available, but the majority have suffered.`
                    ]
                }
            },
            {
                chapter: 'Building',
                box1: {
                    title: `Charming Gray Cape Cod With Backyard Built for Entertaining`,
                    image: `building1.webp`,
                    date: `12 November, 2021`,
                    texts: [
                        `This lovely gray Cape Cod home features a guest house and backyard pool. The main home also has a high-end patio with outdoor kitchen, built-in fireplace and a TV for entertaining. Inside, a spacious farmhouse-style kitchen offers a large eat-in island, abundant storage and great amenities.`,
                        `A living room with built-in shelves offers a great place to gather, and the master bedroom features a balcony with a lovely ocean view.`
                    ]
                },
                quote: `Design is intelligence made visible.`,
                box2: {
                    title: `Gray Cape Cod-Style Home`,
                    image: `building2.webp`,
                    texts: [
                        `A slate tile walkway leads up to a charming Cape Cod-style house with loads of charm.`,
                        `Traditional gables and columns set the tone for the home's classic interiors, while a red front door beckons to guests and creates a fun focal point.`
                    ]
                }
            },
            {
                chapter: 'Architecture',
                box1: {
                    title: `About IS Architecture`,
                    image: `architecture1.webp`,
                    date: `30 March, 2023`,
                    texts: [
                        `IS Architecture’s design philosophy is grounded on the principles of assessing a client’s needs and creating extraordinary spaces which compliment and maximize the site or existing structures.`,
                        `Inherent in this philosophy is the combination of the highest quality product with exceptional client service. We approach each new project without preconceived notions: our designs are driven by each client’s needs, and our specialty is listening and responding with unique solutions.`
                    ]
                },
                quote: `Everything is designed. Few things are designed well.`,
                box2: {
                    title: `French Country Estate`,
                    image: `architecture2.webp`,
                    texts: [
                        `The main portion of this French country home and the fence enclosing the courtyard are built from natural stone.`,
                        `The exterior of the private spaces of the home are clad in a contrasting stucco, drawing a visual boundary between public and private spaces, even from the exterior of the home.`
                    ]
                }
            },
            {
                chapter: 'Kitchen Planning',
                box1: {
                    title: `He Made Over His Childhood Kitchen, Now It's Cozy-Chic`,
                    image: `kitchenDesign1.webp`,
                    date: `2 August, 2022`,
                    texts: [
                        `Love marble, love its imperfections. Alison considers the inevitable stains and etching part of the patina, and worth it for the pretty veining. As well, consider counter tricks.`,
                        `And that’s not really a thick slab of marble on the island. It’s a countertop with mitered edges, a smart way to fake the look that involves joining together thinner pieces of stone. The waterfall edges on either side make it look even more luxe.`
                    ]
                },
                quote: `You can't use up creativity. The more you use, the more you have.`,
                box2: {
                    title: `An Outdoor Kitchen Dream Come True`,
                    image: `kitchenDesign2.webp`,
                    texts: [
                        `Architectural details are always a good thing. The coffered ceiling in the living room creates drama. Another way to add something extra: installing decorative beams.`,
                        `Under-counter wine storage comes in handy. “It keeps your main fridge from getting too crowded, you can set it to the perfect temp, and it helps with resale value”.`
                    ]
                }
            },
            {
                chapter: 'Bathroom',
                box1: {
                    title: `31 Blue Bathroom Design Ideas`,
                    image: `bathroom1.webp`,
                    date: `9 September, 2020`,
                    texts: [
                        `With less square footage to decorate or remodel, small bathrooms and powder rooms are ideal spaces to go all out on design. From fun flooring and fixture ideas to useful space-saving solutions, follow our expert tips and tricks to amp up and make the most out of your tiny space.`,
                        `So, buy that quirky wallpaper you've been eyeing or install that cool mirror you thrifted to create a bathroom that's only small on space — not style.`
                    ]
                },
                quote: `Design adds value faster than it adds costs.`,
                box2: {
                    title: `Small Bathroom Solutions`,
                    image: `bathroom2.webp`,
                    texts: [
                        `Wet room bathrooms — a space fully built with materials designed to get wet — usually include a shower space and freestanding tub in their own glass enclosure. Wet rooms continue to be a smart solution for small spaces, but they're also turning up in luxury bathrooms. It's a natural step from the freestanding tub trend.`,
                        `In this wet room, a stylish freestanding bathtub is strategically placed under an oversized picture window. Floors made of limestone complete the spa-like atmosphere.`
                    ]
                }
            }
        ],
        blogDetailsButtons: {
            title: `Tags`,
            buttonNames: [`Kitchen`, `Bedroom`, `Building`, `Architecture`, `Kitchen Planning`, `Bathroom`],
            selectedButton: 'Kitchen'
        },
        mainPageProjectData: [
            {
                id: 'product1',
                image: 'Product1.webp',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'product2',
                image: 'Product2.webp',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'product3',
                image: 'Product3.webp',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            },
            {
                id: 'product4',
                image: 'Product4.webp',
                title: 'Modern Kitchen',
                subTitle: 'Decor / Artchitecture'
            }
        ],
        mainPageCounterData: [
            {
                number: 12,
                property: 'Years Of Experience',
                isVisibleLine: true
            },
            {
                number: 85,
                property: 'Success Projects',
                isVisibleLine: true
            },
            {
                number: 15,
                property: 'Active Projects',
                isVisibleLine: true
            },
            {
                number: 95,
                property: 'Happy Customers',
                isVisibleLine: false
            }
        ]
    },
    mutations: {
        changeSelectedChapter(state, chapter) {
            state.selectedChapter = chapter;
        },
        changeBlogDetailsSelectedButton(state, buttonName) {
            state.blogDetailsButtons.selectedButton = buttonName;
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
        },
        getBlogDetailsButtons: state => {
            return state.blogDetailsButtons;
        },
        getSelectedBlogDetailsPage: state => {
            console.log(state.blogDetailsPageData.find((chapter) => chapter.chapter === state.blogDetailsButtons.selectedButton));
            return state.blogDetailsPageData.find((chapter) => chapter.chapter === state.blogDetailsButtons.selectedButton);
        },
        getMainPageProjectData: state => {
            return state.mainPageProjectData;
        },
        getMainPageCounterData: state => {
            return state.mainPageCounterData;
        }
    }
})