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
        ]
    },
    getters: {
        getHeaderLinks: state => {
            return state.links.filter((link) => link.class === 'header__link');
        },
        getFooterLinks: state => {
            return state.links.filter((link) => link.class === 'footer__link')
        }
    }
})