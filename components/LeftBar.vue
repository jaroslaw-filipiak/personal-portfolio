<template>
  <div class="left-bar">
    <NuxtLink class="logo" to="/" @click.native="handleClick">JF</NuxtLink>
    <div class="contact-box">
      <a class="block w-32" href="tel:663568828">+48 663 568 828</a>
      <a class="block w-32 ml-8" href="mailto:info@j-filipiak.pl"
        >info@j-filipiak.pl</a
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('click in nuxt link in left bar')
      this.$store.commit('hideMenu')
    },
  },
}
</script>

<style>
.logo {
  @apply transform hover:opacity-95;
}
</style>
