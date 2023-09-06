<template>
    <div class="shoppingCart">
        <div class="routes container">
            <router-link to="/">
                <span>Home/</span>
            </router-link>
            Shopping Card
        </div>
        <div class="shoppingCart__inner container">
            <div class="shoppingCart__inner__main">
                <div class="shoppingCart__inner__main__headers">
                    <h4 class="shoppingCart__inner__main__headers-title">Products</h4>
                    <h4 class="shoppingCart__inner__main__headers-title">Price</h4>
                    <h4 class="shoppingCart__inner__main__headers-title">Quantity</h4>
                    <h4 class="shoppingCart__inner__main__headers-title">Total</h4>
                </div>
                <div class="shoppingCart__inner__main__cards">
                    <OrdersItem v-for="(item, i) in getItemsFromShop" :key="i" :item="item" />
                </div>
            </div>
            <div class="shoppingCart__inner__total">
                <h3>Cart Totals</h3>
                <div class="shoppingCart__inner__total__info">
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Subtotal</span>
                        <span class="shoppingCart__inner__total__info-item-amount">${{ getSubTotalPrice() }}</span>
                    </div>
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Total Discount</span>
                        <span class="shoppingCart__inner__total__info-item-amount">(-) ${{ getDiccountAmount() }}</span>
                    </div>
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Shiping</span>
                        <span class="shoppingCart__inner__total__info-item-amount">${{ shippingPrice }}</span>
                    </div>
                    <a class="shoppingCart__inner__total__info-charge">
                        View shipping charge
                    </a>
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Total</span>
                        <span class="shoppingCart__inner__total__info-item-amountTotal">${{ getTotalPrice() }}</span>
                    </div>
                </div>
                <router-link to="/payment">
                    <button class="shoppingCart__inner__total-btn">
                        Proceed To Checkout
                    </button>
                </router-link>
                <router-link to="/">
                    <h5 class="shoppingCart__inner__total-continue">
                        Continue Shopping
                    </h5>
                </router-link>
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
import OrdersItem from '@/components/Orders/OrderItem.vue'
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";
import { useShopCart } from "@/stores/ShoppingCart.js";
let getIndexStore = computed(() => indexStore.resArray)

const indexStore = useIndex()
const shopCartStore = computed(() => useShopCart());
const getItemsFromShop = computed(() => shopCartStore.value.shopsArr);
let shippingPrice = ref(16)

const getSubTotalPrice = () => {
    let amount = 0
    getItemsFromShop.value.forEach(item => {
        amount += item.price * item.amount
    });
    return amount
}

const getDiccountAmount = () => {
    let amount = 0
    getItemsFromShop.value.forEach(item => {
        amount += item.price * item.amount / item.discountPercentage
    });
    return Math.round(amount)
}

const getTotalPrice = () => {
    let amount = 0
    const subtotal = computed(() => getSubTotalPrice())
    const discount = computed(() => getDiccountAmount())
    amount += subtotal.value
    amount += shippingPrice.value
    amount -= discount.value
    return amount
}

onMounted(async () => {
    await indexStore.getIndex()
})

</script>

<style lang="scss" scoped></style>