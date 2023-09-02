<template>
    <router-link :to="`/productpage/${props.item.id}`">
        <div class="mainGoodsItem" v-if="props.item">
            <div class="mainGoodsItem__inner">
                <div class="mainGoodsItem__inner-img">
                    <img :src="`${props.item.images[0]}`" alt="" class="mainGoodsItem__inner-img-phone">
                    <img src="@/assets/images/cart.svg" alt="" class="mainGoodsItem__inner-img-cart">
                    <img src="@/assets/images/like.svg" alt="" class="mainGoodsItem__inner-img-like" @click="selectedStore.addDeleteItem(props.item)">
                </div>
                <p class="mainGoodsItem__inner-name">{{ props.item.title }}</p>
                <p class="mainGoodsItem__inner-price">${{ props.item.price }}</p>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useItemInfo } from "@/stores/itemInfo.js";
import { useSelected } from '@/stores/selectedCards.js'

const itemInfoStore = useItemInfo()
const selectedStore = computed(() => useSelected())
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