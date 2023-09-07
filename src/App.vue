<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// localStorage.setItem("itemsGoods", JSON.stringify([]))
</script>

<style lang="scss" scoped></style>