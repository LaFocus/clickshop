<template>
  <div class="payment" v-if="getItemsFromShop.length">
    <div class="payment__inner container">
      <div class="payment__inner__forms">
        <h3>Billing Address</h3>
        <form action="">
          <div class="payment__inner__forms-item">
            <span>First Name *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Last Name *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Country / Region *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Town / City *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item payment__inner__forms-itemStreet">
            <span>Street Address *</span>
            <div>
              <input type="text">
              <input type="text">
            </div>
          </div>
          <!-- <div class="payment__inner__forms-item">
            </div> -->
          <div class="payment__inner__forms-item">
            <span>Email address *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Phone Number *</span>
            <input type="text">
          </div>
        </form>
        <div class="payment__inner__forms-diff">
          <input type="checkbox" name="" id="">
          <span>Ship to a different address?</span>
        </div>
        <div class="payment__inner__forms-notes">
          <span>Order notes (optional)</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="payment__inner__order">
        <h3 class="payment__inner__info-title">Your Order</h3>
        <div class="payment__inner__info">
          <div class="payment__inner__info__headers">
            <h4>Products</h4>
            <h4>Subtotal</h4>
          </div>

          <div class="payment__inner__info__order-cards">
            <div class="payment__inner__info__order-cards-item" v-for="(item, i) in getItemsFromShop" :key="i">
              <img :src="item.images[0]" alt="" class="payment__inner__info__order-cards-item-img">
              <div class="payment__inner__info__order-cards-item-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="payment__inner__info__order-cards-item-btns">
                (x{{ item.amount }})
              </div>
              <div class="payment__inner__info__order-cards-item-total">
                ${{ item.price * item.amount }}
              </div>
              <button class="shoppingCart__inner__main__cards-item-trash" @click="shopCartStore.deleteItem(item)">
                <img src="@/assets/images/trash.svg" alt="" srcset="">
              </button>
            </div>
          </div>
          <div class="payment__inner__info__order__money">
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Subtotal</span>
              <span class="payment__inner__info__order__money-item-amount">${{ getSubTotalPrice() }}</span>
            </div>
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Total Discount</span>
              <span class="payment__inner__info__order__money-item-amount">(-) ${{ getDiccountAmount() }}</span>
            </div>
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Shiping</span>
              <span class="payment__inner__info__order__money-item-amount">${{ shippingPrice }}</span>
            </div>
            <a class="payment__inner__info__order__money-charge">
              View shipping charge
            </a>
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Total</span>
              <span class="payment__inner__info__order__money-item-amountTotal">${{ getTotalPrice() }}</span>
            </div>
          </div>
          <button class="payment__inner__info__order__money-btn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="emptyShipCart" v-else>
    <p class="emptyShipCart-title">Your Shipping Cart is Empty!</p>
    <router-link to="/">
      <span class="emptyShipCart-link">View Products</span>
    </router-link>
  </div>
</template>

<script setup>

import { onMounted, computed, ref } from "vue";
import { useShopCart } from "@/stores/ShoppingCart.js";

const shopCartStore = useShopCart()
const getItemsFromShop = computed(() => shopCartStore.shopsArr)
let shippingPrice = ref(16)

const getSubTotalPrice = () => {
  let amount = 0
  shopCartStore.shopsArr.forEach(item => {
    amount += item.price * item.amount
  });
  return amount
}

const getDiccountAmount = () => {
  let amount = 0
  shopCartStore.shopsArr.forEach(item => {
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
})

</script>
