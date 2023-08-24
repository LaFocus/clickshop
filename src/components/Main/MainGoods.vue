<template>
    <div class="mainGoods" v-if="getIndexStore">
        <div class="mainGoods__inner">
            <MainGoodsItem v-for="(item, index) in sortedGoods" :key="index" :item="item" />
            <div class="mainGoods__inner__pagination">
                <div v-if="page >= 2">
                    <div href="#" class="mainGoods__inner__pagination-item backArrow" @click="page--"><img src="@/assets/images/nextPage.svg" alt="" ></div>
                </div>
                <div href="#" class="mainGoods__inner__pagination-item" v-for="item in totalPages" @click="page = item">{{ item }}</div>
                <div href="#" class="mainGoods__inner__pagination-item" @click="page++"><img src="@/assets/images/nextPage.svg" alt=""></div>
            </div>
        </div>

    </div>
</template>

<script setup>
import MainGoodsItem from './MainGoodsItem.vue';
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";


const indexStore = useIndex()

let getIndexStore = computed(() => indexStore.resArray)

onMounted(async () => {
    await indexStore.getIndex()
})

const page = ref(1)

let allProducts = computed(() => {
    const from = page.value * 12 - 12 
    const to = from + 12
    return getIndexStore.value.slice(from, to)
})
let totalPages = computed(() => Math.round(getIndexStore.value.length / 12))

let sortedGoods = computed(() => {
    return allProducts.value.filter(item => item.category == "smartphones")
})


</script>