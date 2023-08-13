<template>
    <div class="poster" :id="posterData.id">
        <div class="poster__intro" v-show="posterData.isTitleExist">
            <h1 class="poster__title">{{ posterData.title }}</h1>
            <p><a href="#" class="poster__breadcrumb" v-for="breadcrumb in posterData.breadcrumbs" :key="breadcrumb.id">{{ breadcrumb }}</a></p>
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