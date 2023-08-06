<template>
    <article class="project">
        <header class="project__header">
            <h2 class="project__title">Follow Our Projects</h2>
            <p class="project__description">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
        </header>
        <div class="project__options">
            <div class="project__product" v-for="card in cards" :key="card.id">
                <img class="project__productPhoto" :id="card.id" :src="require(`@/assets/imgs/project/${card.image}`)" alt="kitchen's photo">
                <div class="project__details">
                    <div class="project__productText">
                        <h3 class="project__productTitle"> {{ card.title }}</h3>
                        <p class="project__productDescription">{{ card.subTitle }}</p>
                    </div>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    name: 'MainProject',
    props: {
        cards: Array
    }
}
</script>