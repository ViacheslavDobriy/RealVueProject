<template>
    <div class="poster" id="projectPoster">
        <div class="poster__intro">
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
<style scoped lang="scss">

#projectPoster {
    background-image: url(@/assets/imgs/project/poster.png);
    background-repeat: no-repeat;
}
</style>