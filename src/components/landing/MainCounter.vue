<template>
    <article class="counter">
        <div class="counter__content">
            <div v-for="counter in counters" :key="counter.id" class="counter__container">
                <div class="counter__box">
                    <h2 class="counter__amount">{{ counter.number }}</h2>
                    <p class="counter__subcontent">{{ counter.property }}</p>
                </div>
                <div class="counter__vertLine" v-show="counter.isVisibleLine"></div>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        counters: Array
    },
    name: 'MainCounter'
}
</script>