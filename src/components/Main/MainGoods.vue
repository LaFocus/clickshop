<template>
    <div class="mainGoods">
        <div class="mainGoods__inner">
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            <MainGoodsItem />
            
            <div class="mainGoods__inner__pagination">
                <a href="#" class="mainGoods__inner__pagination-item">1</a>
                <a href="#" class="mainGoods__inner__pagination-item">2</a>
                <a href="#" class="mainGoods__inner__pagination-item">3</a>
                <a href="#" class="mainGoods__inner__pagination-item">4</a>
                <a href="#" class="mainGoods__inner__pagination-item"><img src="@/assets/images/nextPage.svg" alt=""></a>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import MainGoodsItem from './MainGoodsItem.vue';


    
</script>

<style lang="scss" scoped>

</style>