<template>
    <div class="shoppingCart">
        <div class="shoppingCart__inner container">
            <div class="shoppingCart__inner__main">
                <div class="shoppingCart__inner__main__headers">
                    <h4 class="shoppingCart__inner__main__headers-title">Products</h4>
                    <h4 class="shoppingCart__inner__main__headers-title">Price</h4>
                    <h4 class="shoppingCart__inner__main__headers-title">Quantity</h4>
                    <h4 class="shoppingCart__inner__main__headers-title">Total</h4>
                </div>
                <div class="shoppingCart__inner__main__cards">
                    <OrdersItems />
                    <OrdersItems />
                </div>
            </div>
            <div class="shoppingCart__inner__total">
                <h3>Cart Totals</h3>
                <div class="shoppingCart__inner__total__info">
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Subtotal</span>
                        <span class="shoppingCart__inner__total__info-item-amount">$138.00</span>
                    </div>
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Coupon Discount</span>
                        <span class="shoppingCart__inner__total__info-item-amount">(-) 00.00</span>
                    </div>
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Shiping</span>
                        <span class="shoppingCart__inner__total__info-item-amount">$16.00</span>
                    </div>
                    <a class="shoppingCart__inner__total__info-charge">
                        View shipping charge
                    </a>
                    <div class="shoppingCart__inner__total__info-item">
                        <span class="shoppingCart__inner__total__info-item-name">Total</span>
                        <span class="shoppingCart__inner__total__info-item-amountTotal">$154.00</span>
                    </div>
                </div>
                <button class="shoppingCart__inner__total-btn">
                    Proceed To Checkout
                </button>
                <h5 class="shoppingCart__inner__total-continue">
                    Continue Shopping
                </h5>
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
import OrdersItems from '@/components/Orders/OrderItem.vue'
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";
let getIndexStore = computed(() => indexStore.resArray)

const indexStore = useIndex()

onMounted(async () => {
    await indexStore.getIndex()
})
</script>

<style lang="scss" scoped></style>