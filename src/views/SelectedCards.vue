<template>
    <div class="selectedItems">
        <div class="selectedItems__item" v-for="(item, i) in selectedStore.selectedArr" :key="i">
            <div class="selectedItems__item__inner">
                <div class="selectedItems__item__inner-img">
                    <img :src="`${item.images[0]}`" alt="" class="selectedItems__item__inner-img-phone">
                    <img src="@/assets/images/cart.svg" alt="" class="selectedItems__item__inner-img-cart">
                    <img src="@/assets/images/like.svg" alt="" class="selectedItems__item__inner-img-like"
                        @click="selectedStore.addDeleteItem(item)">
                </div>
                <p class="selectedItems__item__inner-name">{{ item.title }}</p>
                <p class="selectedItems__item__inner-price">${{ item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSelected } from '@/stores/selectedCards.vue'
const selectedStore = computed(() => useSelected())

</script>
