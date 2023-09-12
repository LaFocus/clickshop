<template>
    <div class="shoppingCart__inner__main__cards-item">
        <img :src="item.images[0]" alt="" class="shoppingCart__inner__main__cards-item-img">
        <div class="shoppingCart__inner__main__cards-item-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
        </div>
        <div class="shoppingCart__inner__main__cards-item-price">
            ${{ item.price }}
        </div>
        <div class="shoppingCart__inner__main__cards-item-btns">
            <button class="shoppingCart__inner__main__cards-item-btns-btn" @click="shopCartStore.changeAmount(item, '-')">-</button>
            <span>{{ item.amount }}</span>
            <button class="shoppingCart__inner__main__cards-item-btns-btn" @click="shopCartStore.changeAmount(item, '+')">+</button>
        </div>
        <div class="shoppingCart__inner__main__cards-item-total">
            ${{ item.price * item.amount }}
        </div>
        <button class="shoppingCart__inner__main__cards-item-trash" @click="shopCartStore.deleteItem(item)">
            <img src="@/assets/images/trash.svg" alt="" srcset="">
        </button>
    </div>
</template>

<script setup>
import { useShopCart } from '@/stores/ShoppingCart.js'
import { computed } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        requaired: true,
    }
})

const shopCartStore = useShopCart()


</script>