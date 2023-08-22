<template>
    <div class="intro" v-if="getIndexStore">
        <Swiper :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }" :modules="modules">
            <Swiper-slide v-for="(item, i) in getIndexStore.slice(10, 13)" :key="i">
                <div class="container intro__inner">
                    <div class="intro__inner__info">
                        <h2 class="intro__inner__info-logo">
                            {{ item.title }}
                        </h2>
                        <button class="intro__inner__info-btn">
                            shop now
                        </button>
                    </div>
                    <img :src="`${item.images[0]}`" alt="" class="intro__inner-img">
                </div>
            </Swiper-slide>
        </Swiper>
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

onMounted(() => {
    indexStore.getIndex()
})


</script>

<style lang="scss" scoped></style>