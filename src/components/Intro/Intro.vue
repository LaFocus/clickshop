<template>
    <div class="intro" v-if="getIndexStore">
        <div class="container intro__inner">
            <div class="intro__inner__info">
                <h2 class="intro__inner__info-logo">
                    iPhone 14 Pro Max
                </h2>
                <button class="intro__inner__info-btn">
                    shop now
                </button>
            </div>
            <Swiper :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }" :modules="modules" class="intro__inner__slider">
                <Swiper-slide v-for="(item, i) in 3" :key="i" class="intro__inner__slider-item">
                    <img :src="getImageUrl(item)" alt="">
                </Swiper-slide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { useIndex } from '@/stores/index.js'
import { onMounted, computed, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
// import { Navigation } from "swiper";
import "swiper/scss";
import 'swiper/scss/pagination';

let modules = ref([Pagination])
const indexStore = useIndex()
let getIndexStore = computed(() => indexStore.resArray)
function getImageUrl(name) {
    return new URL(`../../assets/images/intro${name}.png`, import.meta.url).href
}

onMounted(() => {
    indexStore.getIndex()
})


</script>

<style lang="scss" scoped></style>