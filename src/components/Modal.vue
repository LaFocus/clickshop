<template>
   
</template>

<script setup>
import { computed, ref } from 'vue'
import { useShopCart } from "@/stores/ShoppingCart.js";

const shopCartStore = useShopCart()
const getItemsFromShop = computed(() => shopCartStore.shopsArr)
const shippingPrice = ref(16)

const props = defineProps({
    flag: {
        type: Boolean,
        requaired: true
    }
})
// const emits = defineEmits(['changeFlag'])

const flag = props.flag

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

</script>
