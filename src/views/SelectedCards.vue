<template>
    <div class="routes container">
        <router-link to="/">
            <span>Home/</span>
        </router-link>
        Selected
    </div>
    <div class="selectedItems container">
        <!-- <div class="selectedItems__item" v-for="(item, i) in selectedStore.selectedArr" :key="i"> -->
        <div class="selectedItems__item" v-for="(item, i) in localSelectedArr" :key="i">
            <div class="selectedItems__item__inner">
                <div class="selectedItems__item__inner-img">
                    <img :src="`${item.images[0]}`" alt="" class="selectedItems__item__inner-img-phone">
                    <button @click="addItemtoShop.addItem(item, 1)">
                        <img src="@/assets/images/cart.svg" alt="" class="mainGoodsItem__inner-img-cart">
                    </button>
                    <!-- <button @click.stop="selectedStore.addDeleteItem(item)"> -->
                    <button @click="deleteItem(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="#030A8C"
                            class="mainGoodsItem__inner-img-like">
                            <path
                                d="M12.0069 19L2.67077 10.709C-2.40323 5.73443 5.05554 -3.81677 12.0069 3.91042C18.9583 -3.81677 26.3832 5.7676 21.3431 10.709L12.0069 19Z"
                                stroke="#030A8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                ref="likeFill" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useShopCart } from "@/stores/ShoppingCart.js"
const addItemtoShop = useShopCart()
const localSelectedArr = ref(JSON.parse(localStorage.itemsGoods) || [])

const deleteItem = (e) => {
    const storedItems = JSON.parse(localStorage.getItem('itemsGoods')) || [];
    const existingIndex = storedItems.findIndex(item => JSON.stringify(item) === JSON.stringify(e));
    if (existingIndex !== -1) {
        storedItems.splice(existingIndex, 1);
        localStorage.setItem('itemsGoods', JSON.stringify(storedItems));
        localSelectedArr.value = storedItems;
    }
};

</script>