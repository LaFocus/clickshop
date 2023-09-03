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
                <div href="#" class="mainGoods__inner__pagination-item backArrow" v-if="page >= 2" @click="paginateGoods">
                    <img src="@/assets/images/nextPage.svg" alt="">
                </div>
                <div href="#" class="mainGoods__inner__pagination-item" v-for="item in totalPages"
                    @click="paginateGoods(item)">
                    {{ item }}
                </div>
                <div href="#" class="mainGoods__inner__pagination-item" @click="paginateGoods">
                    <img src="@/assets/images/nextPage.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="mainGoods__loading" v-else>
        <div class="mainGoodsItem__loading">
            <div class="mainGoodsItem__inner">
                <div class="mainGoodsItem__inner-img">
                    <div class="mainGoodsItem__inner-img-phone"></div>
                </div>
                <p class="mainGoodsItem__inner-name"></p>
                <p class="mainGoodsItem__inner-price"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import MainGoodsItem from '@/components/Main/MainGoodsItem.vue';
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";
import { categories } from '@/statick.js'

const indexStore = useIndex()
const page = ref(1)
const categoryValue = ref(null)


let getIndexStore = computed(() => indexStore.resArray)
const totalPages = computed(() => Math.round(getIndexStore.value.length / 12))
const allProds = ref(null)

const filterGoods = (e) => {
    allProds.value = getIndexStore.value.filter(item => item.category == categories[e])
    totalPages.value = Math.round(allProds.value.length / 12)
}

const paginateGoods = (e) => {
    e == "-" ? page.value-- : e == "+" ? page.value++ : page.value = e
    const from = page.value * 12 - 12
    const to = from + 12
    allProds.value = getIndexStore.value.slice(from, to)
}




onMounted(async () => {
    await indexStore.getIndex()
    allProds.value = getIndexStore.value
    paginateGoods(1)
})

</script>