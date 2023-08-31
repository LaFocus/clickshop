<template>
    <div class="productCard" v-if="info">
        <div class="productCard__inner container">
            <div class="productCard__inner__images">
                <div class="productCard__inner__images__thumbnails">
                    <div class="productCard__inner__images__thumbnails-item">
                        <img :src="info.images[0]" alt="" width="110px" height="110px">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img :src="info.images[0]" alt="" width="110px" height="110px">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img :src="info.images[0]" alt="" width="110px" height="110px">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img :src="info.images[0]" alt="" width="110px" height="110px">
                    </div>
                    <div class="productCard__inner__images__thumbnails-item">
                        <img :src="info.images[0]" alt="" width="110px" height="110px">
                    </div>
                </div>
                <div class="productCard__inner__images-mainImage">
                    <img :src="info.images[0]" alt="">
                </div>
            </div>
            <div class="productCard__inner__info">
                <h3 class="productCard__inner__info-title">
                    {{ info.title }}
                </h3>
                <h4 class="productCard__inner__info-price">
                    ${{ info.price }}
                </h4>
                <div class="productCard__inner__info-description">
                    <span>Product description</span>
                    <p>{{ info.description }}</p>
                </div>

                <div class="productCard__inner__info__btns">
                    <div class="productCard__inner__info__btns__amount">
                        <button class="productCard__inner__info__btns__amount-btn">-</button>
                        <span>1</span>
                        <button class="productCard__inner__info__btns__amount-btn">+</button>
                    </div>
                    <button class="productCard__inner__info__btns-order" @click="addItemtoShop.addItem(info)">Buy NOW</button>
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
                <MainGoodsItem v-for="(item, i) in getIndexStore.slice(0, 4)" :key="i" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MainGoodsItem from '@/components/Main/MainGoodsItem.vue';
import { useIndex } from "@/stores/index.js";
import { useShopCart } from "@/stores/ShoppingCart.js"
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";


const indexStore = useIndex()
const info = ref(null)

let getIndexStore = computed(() => indexStore.resArray)
const addItemtoShop = useShopCart()

import { useItemInfo } from "@/stores/itemInfo.js";

const itemInfoStore = useItemInfo()
const itemInfo = computed(() => itemInfoStore.itemInfo)
const route = useRoute();
const id = route.params.id

onMounted(async () => {
    await indexStore.getIndex()
    if (route.params.id) {
        await itemInfoStore.getItemInfo(id)
        info.value = itemInfo.value
        console.log(info.value);
    }
})

</script>
