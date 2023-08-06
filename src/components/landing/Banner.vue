<template>
    <article class="banner">
            <div class="banner__intro">
                <div class="banner__content">
                    <h1 class="banner__title">{{ title }}</h1>
                    <p class="banner__text">{{ description }}</p>
                </div>
                <button class="banner__button">{{ buttonText }}<svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </article>
</template>
<script>
export default {
    name: 'Banner',
    data() {
        return {
            title: 'Let Your Home Be Unique',
            description: 'There are many variations of the passages of lorem Ipsum fromavailable, majority.',
            buttonText: 'Get Started'
        }
    }
}
</script>