<template>
    <div class="mainGoods" v-if="getIndexStore">
        <div>
            <h3 class="mainGoods__inner-title">Categories</h3>
            <ul class="mainGoods__inner-list">
                <li v-for="(item, i) in categories" :key="i" @click="filterGoods(i)" class="mainGoods__inner-list-item">

                    {{ item }}

                </li>
            </ul>
        </div>
        <div class="mainGoods__inner">
            
            <MainGoodsItem v-for="(item, index) in allProds" :key="index" :item="item" />
            <div class="mainGoods__inner__pagination">
                <div v-if="page >= 2">
                    <div href="#" class="mainGoods__inner__pagination-item backArrow" @click="page--"><img
                            src="@/assets/images/nextPage.svg" alt=""></div>
                </div>
                <div href="#" class="mainGoods__inner__pagination-item" v-for="item in totalPages" @click="page = item">{{
                    item }}</div>
                <div href="#" class="mainGoods__inner__pagination-item" @click="page++"><img
                        src="@/assets/images/nextPage.svg" alt=""></div>
            </div>
        </div>

    </div>
</template>

<script setup>
import MainGoodsItem from './MainGoodsItem.vue';
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";
import { categories } from '@/statick.js'

const indexStore = useIndex()
const page = ref(1)
const categoryValue = ref(null)


let getIndexStore = computed(() => indexStore.resArray)
let totalPages = computed(() => Math.round(getIndexStore.value.length / 12))

const allProds = ref()

const filterGoods = (e) => {
    allProds.value = getIndexStore.value.filter(item => item.category == categories[e])
}



computed(() => {
    const from = page.value * 12 - 12
    const to = from + 12
    return getIndexStore.value.slice(from, to)
})


onMounted(async () => {
    await indexStore.getIndex()
    allProds.value = getIndexStore.value

})

</script>