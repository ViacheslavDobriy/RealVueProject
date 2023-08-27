<template>
  <header class="header">
    <RouterLink to="/" class="header__logoBox">
      <svg class="header__logo" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
          fill="#CDA274" />
      </svg>
      <h3 class="header__title">Interno</h3>
    </RouterLink>
    <div class="header__menuBar">
      <RouterLink v-for="link in this.getHeaderLinks()" :key="link.id" :to="link.href" :class="link.class">
        {{ link.content }}
      </RouterLink>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "header",
  methods: {
    ...mapGetters(["getHeaderLinks"]),
  },
};
</script>
