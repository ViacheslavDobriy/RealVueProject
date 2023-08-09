<template>
    <div class="poster" :id="posterData.id">
        <div class="poster__intro" v-show="posterData.isTitleExist">
            <h1 class="poster__title">{{ posterData.title }}</h1>
            <p class="poster__text">{{ posterData.breadcrumbs }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SubHeader',
    props: {
        posterData: Object
    }
}
</script>