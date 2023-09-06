<template>
    <div class="mainGoodsItem" v-if="props.item">
        <div class="mainGoodsItem__inner">
            <div class="mainGoodsItem__inner-img">
                <router-link :to="`/productpage/${props.item.id}`">
                    <img :src="`${props.item.images[0]}`" alt="" class="mainGoodsItem__inner-img-phone">
                </router-link>
                <button @click="addItemToShopANDLOCAL">
                    <img src="@/assets/images/cart.svg" alt="" class="mainGoodsItem__inner-img-cart">
                </button>
                <button @click="itemToLocal(props.item)">
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
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useItemInfo } from "@/stores/itemInfo.js";
import { useShopCart } from "@/stores/ShoppingCart.js"

const itemInfoStore = useItemInfo()
const addItemtoShop = useShopCart()
const addItemToShopANDLOCAL = () => {
    addItemtoShop.addItem(props.item, 1)
    localStorage.shopsArr = JSON.stringify(addItemtoShop.shopsArr)
}
const route = useRoute();
const id = route.params.id
const localItems = ref([])
const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
})

const itemToLocal = (e) => {
  const existingIndex = localItems.value.findIndex(item => JSON.stringify(item) === JSON.stringify(e));
  if (existingIndex !== -1) {
    localItems.value.splice(existingIndex, 1);
  } else {
    localItems.value.push(e);
  }

  let storedItems = JSON.parse(localStorage.getItem('itemsGoods')) || [];
  let updatedItems = [...storedItems, ...localItems.value];
  console.log(updatedItems);
  localStorage.setItem('itemsGoods', JSON.stringify(updatedItems));
};

onMounted(async () => {
    if (route.params.id) {
        await itemInfoStore.getItemInfo(id)
    }
})

</script>