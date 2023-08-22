<template>
    <div class="mainGoodsItem" v-if="item">
        <div class="mainGoodsItem__inner">
            <div class="mainGoodsItem__inner-img">
                <img :src="`${props.item.images[0]}`" alt="" class="mainGoodsItem__inner-img-phone">
                <img src="@/assets/images/cart.svg" alt="" class="mainGoodsItem__inner-img-cart">
                <img src="@/assets/images/like.svg" alt="" class="mainGoodsItem__inner-img-like">
            </div>
            <p class="mainGoodsItem__inner-name">{{ props.item.title }}</p>
            <p class="mainGoodsItem__inner-price">${{ props.item.price }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";


const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
})

onMounted(() => {
})

</script>