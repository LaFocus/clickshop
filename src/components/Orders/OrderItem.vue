<template>
    <div class="shoppingCart__inner__main__cards-item">
        <img :src="item.images[0]" alt="" class="shoppingCart__inner__main__cards-item-img">
        <div class="shoppingCart__inner__main__cards-item-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
        </div>
        <div class="shoppingCart__inner__main__cards-item-price">
            ${{ item.price }}
        </div>
        <div class="shoppingCart__inner__main__cards-item-btns">
            <button class="shoppingCart__inner__main__cards-item-btns-btn">-</button>
            <span>1</span>
            <button class="shoppingCart__inner__main__cards-item-btns-btn">+</button>
        </div>
        <div class="shoppingCart__inner__main__cards-item-total">
            $119.00
        </div>
        <button class="shoppingCart__inner__main__cards-item-trash">
            <img src="@/assets/images/trash.svg" alt="" srcset="">
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        requaired: true,
    }
})
</script>

<style lang="scss" scoped></style>