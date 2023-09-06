<template>
    <div class="productCard" v-if="info">
        <div class="routes container">
            <router-link to="/">
                <span>Home/</span>
            </router-link>
            Product Card
        </div>
        <div class="productCard__inner container">
            <div class="productCard__inner__images">
                <div class="productCard__inner__images__thumbnails">
                    <div class="productCard__inner__images__thumbnails-item" v-for="(item, i) in info.images" :key="i">
                        <img :src="item" alt="" @click="changeImage(info.images.indexOf(item))">
                    </div>
                </div>
                <div class="productCard__inner__images-mainImage">
                    <img :src="info.images[currImage]" alt="">
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
                        <button class="productCard__inner__info__btns__amount-btn" @click="changeAmount('-')">-</button>
                        <span>{{ amount }}</span>
                        <button class="productCard__inner__info__btns__amount-btn" @click="changeAmount('+')">+</button>
                    </div>
                    <button class="productCard__inner__info__btns-order" @click="addItemtoShop.addItem(info, amount)">Buy
                        NOW</button>
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
            <div class="productCard__recommendations__goods" v-if="getIndexStore">
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
import { useRoute } from "vue-router";
import { useItemInfo } from "@/stores/itemInfo.js";

const indexStore = useIndex()
const addItemtoShop = useShopCart()
const itemInfoStore = useItemInfo()
const route = useRoute();

const info = ref(null)
const amount = ref(1)
const currImage = ref(0)
const id = route.params.id

const getIndexStore = computed(() => indexStore.resArray)
const itemInfo = computed(() => itemInfoStore.itemInfo)

const changeAmount = (operator) => {
    operator == '-' ? amount.value-- : operator == '+' ? amount.value++ : ''
}
const changeImage = (e) => {
    currImage.value = e
}

onMounted(async () => {
    await indexStore.getIndex()
    if (route.params.id) {
        await itemInfoStore.getItemInfo(id)
        info.value = itemInfo.value
        console.log(info.value);
    }
})

</script>
