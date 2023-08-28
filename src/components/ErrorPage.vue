<template>
    <main class="error">
        <div class="error__explain">
            <h1 class="error__number">404</h1>
            <p class="error__message">We are sorry, but the page you requested was not found</p>
            <RouterLink to="/" class="error__button"> Back To Home
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#FFF"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </RouterLink>
        </div>
        <img src="../assets/imgs/error/chaos.jpg" alt="Picture of chaos" class="error__image">
    </main>
</template>
<script>
export default {
    name: 'Error'
}
</script>