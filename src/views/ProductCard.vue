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
                <div class="productCard__inner__images__thumbnails" ref="thumbnails">
                    <div class="productCard__inner__images__thumbnails-item" v-for="(item, i) in info.images" :key="i"
                        @click="changeImage(info.images.indexOf(item), $event)">
                        <img :src="item" alt="" class="productCard__inner__images__thumbnails-item-img">
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
                        <span>{{ getAmount() }}</span>
                        <button class="productCard__inner__info__btns__amount-btn" @click="changeAmount('+')">+</button>
                    </div>
                    <button class="productCard__inner__info__btns-order" @click="addItemtoShop.addItem(info, amount)">Buy
                        NOW</button>
                    <svg @click="itemToLocal(info, $event)" xmlns="http://www.w3.org/2000/svg" width="24" height="20"
                        viewBox="0 0 24 20" :fill="fillValue" class="productCard__inner__info__btns-like">
                        <path
                            d="M12.0069 19L2.67077 10.709C-2.40323 5.73443 5.05554 -3.81677 12.0069 3.91042C18.9583 -3.81677 26.3832 5.7676 21.3431 10.709L12.0069 19Z"
                            stroke="#030A8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                            ref="likeFill" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="productCard__recommendations container" v-if="getIndexStore">
            <div class="productCard__recommendations-title">
                <h3>You may be interested in</h3>
            </div>
            <div class="productCard__recommendations__goods" v-if="getIndexStore">
                <Swiper :slides-per-view="1">
                    <SwiperSlide class="productCard__recommendations__goods__slide">
                        <MainGoodsItem v-for="(item, i) in getIndexStore.slice(23, 27)" :key="i" :item="item"
                            @click="reload" />
                    </SwiperSlide>
                    <SwiperSlide class="productCard__recommendations__goods__slide">
                        <MainGoodsItem v-for="(item, i) in getIndexStore.slice(19, 23)" :key="i" :item="item" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainGoodsItem from '@/components/Main/MainGoodsItem.vue';
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useItemInfo } from "@/stores/itemInfo.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useShopCart } from "@/stores/ShoppingCart.js";
import "swiper/scss";
import 'swiper/scss/pagination';

const shopCartStore = useShopCart();
const addItemtoShop = useShopCart()

const indexStore = useIndex()
const itemInfoStore = useItemInfo()
const route = useRoute();

const info = ref(null)
const currImage = ref(0)
const thumbnails = ref(null)
const id = route.params.id
const likeFill = ref(null)
const amount = ref(1)

const getIndexStore = computed(() => indexStore.resArray)
const itemInfo = computed(() => itemInfoStore.itemInfo)

const changeAmount = (op) => {
  const item = info.value;
  let amountFromCart = getAmount()
  op == "-" ? amountFromCart-- : amountFromCart++
  amountFromCart == 0 ? amountFromCart = 1 : ''
  shopCartStore.deleteItem(item);
  shopCartStore.addItem(item, amountFromCart);
};
const changeImage = (e, event) => {
    currImage.value = e
    const thumbnailsItems = event.target.closest(".productCard__inner__images__thumbnails-item");
    if (thumbnailsItems) {
        const allItems = thumbnails.value.querySelectorAll(".productCard__inner__images__thumbnails-item");
        allItems.forEach((item) => {
            item.classList.remove("active");
        });
        thumbnailsItems.classList.add("active");
    }
}
const itemToLocal = (e) => {
    const storedItems = JSON.parse(localStorage.getItem('itemsGoods') || '[]');
    const existingIndex = storedItems.findIndex(item => JSON.stringify(item) === JSON.stringify(e));
    console.log(existingIndex);
    if (existingIndex !== -1) {
        storedItems.splice(existingIndex, 1);
        likeFill.value.setAttribute('fill', '#fff');
    } else {
        storedItems.push(e);
        likeFill.value.setAttribute('fill', '#030A8C');

    }
    localStorage.setItem('itemsGoods', JSON.stringify(storedItems));
};
const reload = () => {
    window.location.reload();
}

const fillValue = computed(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemsGoods') || '[]');
    const itemExists = storedItems.some(item => JSON.stringify(item) === JSON.stringify(info.value));
    return itemExists ? "#030A8C" : "none";
});

const getAmount = () => {
    let shopsArrItem = shopCartStore.shopsArr.find((item) => item.id == info.value.id)
    return shopsArrItem ? shopsArrItem.amount : 1
}

onMounted(async () => {
    await indexStore.getIndex()
    if (route.params.id) {
        await itemInfoStore.getItemInfo(id)
        info.value = itemInfo.value
    }
    getAmount()
})
</script>
