<template>
    <div class="intro">
        <div class="container intro__inner">
            <div class="intro__inner__info">
                <h2 class="intro__inner__info-logo">
                    iPhone 14 Pro Max
                </h2>
                <button class="intro__inner__info-btn">
                    shop now
                </button>
            </div>
            <img src="@/assets/images/intro.png" alt="" class="intro__inner-img" width="890px" height="670px">
        </div>
    </div>
</template>

<script setup>
import { useIndex } from '@/stores/index.js'
import { onMounted } from "vue";
const indexStore = useIndex()

onMounted(() => {
    indexStore.getIndex()
})


</script>

<style lang="scss" scoped></style>