<template>
    <div class="selectedItems container">
        <div class="selectedItems__item" v-for="(item, i) in selectedStore.selectedArr" :key="i">
            <div class="selectedItems__item__inner">
                <div class="selectedItems__item__inner-img">
                    <img :src="`${item.images[0]}`" alt="" class="selectedItems__item__inner-img-phone">
                    <button @click="addItemtoShop.addItem(item, 1)">
                        <img src="@/assets/images/cart.svg" alt="" class="mainGoodsItem__inner-img-cart">
                    </button>
                    <button @click.stop="selectedStore.addDeleteItem(item)">
                        <img src="@/assets/images/like.svg" alt="" class="mainGoodsItem__inner-img-like">
                    </button>
                </div>
                <p class="selectedItems__item__inner-name">{{ item.title }}</p>
                <p class="selectedItems__item__inner-price">${{ item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSelected } from '@/stores/selectedCards.js'
import { computed } from 'vue'
import { useShopCart } from "@/stores/ShoppingCart.js"

const selectedStore = computed(() => useSelected())
const addItemtoShop = useShopCart()



</script>