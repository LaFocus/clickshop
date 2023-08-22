<template>
    <div class="mainGoods" v-if="getIndexStore">
        <div class="mainGoods__inner">
            <MainGoodsItem v-for="(item, index) in getIndexStore" :key="index" :item="item" />
            <div class="mainGoods__inner__pagination">
                <a href="#" class="mainGoods__inner__pagination-item" v-for="item in 4">{{ item }}</a>
                <a href="#" class="mainGoods__inner__pagination-item" @click="page++"><img src="@/assets/images/nextPage.svg" alt=""></a>
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
    console.log(getIndexStore.value.slice(0,12))

})

const page = ref(1)

let products = computed(() => {
    const from = page.value * 12 - 12 
    const to = from + 12
    console.log(to);
    getIndexStore.slice(from, to)
})

</script>