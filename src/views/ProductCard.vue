<template>
    <div class="productCard">
        <div class="productCard__inner container">
            <div class="productCard__inner__images">
                <div class="productCard__inner__images__thumbnails">
                    <div class="productCard__inner__images__thumbnails-item">
                        <img src="@/assets/images/pd.png" alt="">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img src="@/assets/images/pd2.png" alt="">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img src="@/assets/images/pd4.png" alt="">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img src="@/assets/images/pd3.png" alt="">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img src="@/assets/images/pd5.png" alt="">
                    </div>
                </div>
                <div class="productCard__inner__images-mainImage">
                    <img src="@/assets/images/pd1.png" alt="">
                </div>
            </div>
            <div class="productCard__inner__info">
                <h3 class="productCard__inner__info-title">
                    Samsung GalaxyA52 White 128Gb
                </h3>
                <h4 class="productCard__inner__info-price">
                    $119.00
                </h4>
                <div class="productCard__inner__info-description">
                    <span>Product description</span>
                    <p>An apple mobile which is nothing like apple</p>
                </div>
                
                <div class="productCard__inner__info__btns">
                    <div class="productCard__inner__info__btns__amount">
                        <button class="productCard__inner__info__btns__amount-btn">-</button>
                        <span>1</span>
                        <button class="productCard__inner__info__btns__amount-btn">+</button>  
                    </div>
                    <button class="productCard__inner__info__btns-order">Buy NOW</button>
                    <button class="productCard__inner__info__btns-like">
                        <img src="@/assets/images/like.svg" alt="" srcset="">
                    </button>
                </div>
            </div>
        </div>
        
        <div class="productCard__recommendations container" v-if="getIndexStore">
            <div class="productCard__recommendations-title">
                <h3>You may be interested in</h3>
            </div>
            <div class="productCard__recommendations__goods">
                <MainGoodsItem v-for="(item, i) in getIndexStore.slice(0, 4)" :key="i" :item="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainGoodsItem from '@/components/Main/MainGoodsItem.vue';

import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";

const indexStore = useIndex()
const page = ref(1)
const categoryValue = ref(null)


let getIndexStore = computed(() => indexStore.resArray)


onMounted(async () => {
    await indexStore.getIndex()
})


</script>

<style lang="scss" scoped></style>