<template>
    <RouterLink to="/blogDetails" class="blog__borderBox">
        <div class="blog__content">
            <div class="blog__photo-box">
                <img :src="require(`@/assets/imgs/blog/${card.image}`)" alt="photo of design" class="blog__design">
                <div class="blog__label">
                    <p class="blog__label-text">{{card.labelText}}</p>
                </div>
            </div>
            <div class="blog__description">
                <h3 class="blog__title">{{ card.title }}</h3>
                <footer class="blog__footer">
                    <p class="blog__date">{{ card.date }}</p>
                    <RouterLink to="/blogDetails" class="blog__link">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </RouterLink>
                </footer>
            </div>
        </div>
    </RouterLink>
</template>
<script>

export default {
    props: {
        card: Object
    },
    name: 'BlogCard'
}
</script>