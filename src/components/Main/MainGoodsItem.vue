<template>
    <div class="mainGoodsItem" v-if="props.item">
        <div class="mainGoodsItem__inner">
            <div class="mainGoodsItem__inner-img">
                <router-link :to="`/productpage/${props.item.id}`">
                    <img :src="`${props.item.images[0]}`" alt="" class="mainGoodsItem__inner-img-phone">
                </router-link>
                <button @click="addItemtoShop.addItem(item, 1)">
                    <img src="@/assets/images/cart.svg" alt="" class="mainGoodsItem__inner-img-cart">
                </button>
                <button @click.stop="selectedStore.addDeleteItem(props.item)">
                    <img src="@/assets/images/like.svg" alt="" class="mainGoodsItem__inner-img-like">
                </button>
            </div>
            <router-link :to="`/productpage/${props.item.id}`">

                <p class="mainGoodsItem__inner-name">{{ props.item.title }}</p>
                <p class="mainGoodsItem__inner-price">${{ props.item.price }}</p>
            </router-link>

        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useItemInfo } from "@/stores/itemInfo.js";
import { useSelected } from '@/stores/selectedCards.js'
import { useShopCart } from "@/stores/ShoppingCart.js"

const itemInfoStore = useItemInfo()
const selectedStore = computed(() => useSelected())
const addItemtoShop = useShopCart()
const itemInfo = computed(() => itemInfoStore.itemInfo)
const route = useRoute();
const id = route.params.id
const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
})

onMounted(async () => {
    if (route.params.id) {
        await itemInfoStore.getItemInfo(id)
        // console.log(id);
        // console.log(itemInfo.value);
    }
})

</script>