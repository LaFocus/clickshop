<template>
    <section class="mainGoods" v-if="getIndexStore">
        <div>
            <h3 class="mainGoods__inner-title">Categories</h3>
            <ul class="mainGoods__inner-list" ref="list">
                <li v-for="(item, i) in categories" :key="i" @click="filterGoods(i, $event)"
                    class="mainGoods__inner-list-item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="mainGoods__inner">
            <MainGoodsItem v-for="(item, index) in allProds" :key="index" :item="item" />
            <div class="mainGoods__inner__pagination" ref="paginateRefs">
                <div href="#" class="mainGoods__inner__pagination-item backArrow" v-if="page >= 2" @click="minusPage">
                    <img src="@/assets/images/nextPage.svg" alt="">
                </div>
                <div href="#" class="mainGoods__inner__pagination-item" v-for="item in totalPages"
                    :class="{ active: item === page }" @click="paginateGoods(item)">
                    {{ item }}
                </div>
                <div href="#" class="mainGoods__inner__pagination-item" @click="plusPage">
                    <img src="@/assets/images/nextPage.svg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import MainGoodsItem from '@/components/Main/MainGoodsItem.vue';
import { useIndex } from "@/stores/index.js";
import { onMounted, computed, ref } from "vue";
import { categories } from '@/statick.js'

const indexStore = useIndex()
const page = ref(1)
const hasActiveBool = ref(false)
const activeFilter = ref(null);
const list = ref(null)
const allProds = ref(null)
const paginateRefs = ref(null)

let getIndexStore = computed(() => indexStore.resArray)
const totalPages = computed(() => Math.round(getIndexStore.value.length / 12))

const filterGoods = (e, ev) => {
    if (activeFilter.value === e) {
        ev.target.classList.remove('active');
        activeFilter.value = null;
        allProds.value = getIndexStore.value;
        paginateGoods(1);
        paginateRefs.value.style.display = 'flex';
    } else {
        if (activeFilter.value !== null) {
            const prevActiveFilterEl = list.value.children[activeFilter.value];
            prevActiveFilterEl.classList.remove('active');
        }
        ev.target.classList.add('active');
        activeFilter.value = e;
        allProds.value = getIndexStore.value.filter(item => item.category == categories[e]);
        paginateRefs.value.style.display = 'none';
    }
};

const minusPage = () => {
    page.value--
    const from = page.value * 12 - 12
    const to = from + 12
    allProds.value = getIndexStore.value.slice(from, to)
}
const plusPage = () => {
    page.value++
    const from = page.value * 12 - 12
    const to = from + 12
    allProds.value = getIndexStore.value.slice(from, to)
}
const pageActive = ref(1)
const paginateGoods = (e) => {
    pageActive.value = e
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