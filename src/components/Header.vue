<template>
    <nav class="header">
        <div class="header__inner container">
            <router-link class="header__inner-logo" to="/">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>
            <ul class="header__inner-list" :class="{ active: burger }" @click.stop="">
                <li><router-link @click="burgerOff" to="/" class="header__inner-list-item">Home</router-link></li>
                <li><router-link @click="burgerOff" to="/like" class="header__inner-list-item">Selected
                        Products</router-link></li>
                <li><router-link to="/payment" class="header__inner-list-item" @click="burgerOff">Payment and
                        delivery</router-link></li>
                <li @click="scrollToBottom" class="header__inner-list-item">Contacts</li>
            </ul>
            <div class="burgerMenu" :class="{ active: burger }" @click="burgerOff">
                <div class="burgerMenu__inner">
                    <ul class="burgerMenu__inner-list" @click.stop="">
                        <li class="burgerMenu__inner-list-close" @click="burgerOff">
                            <img src="@/assets/images/close.svg" alt="">
                        </li>
                        <li><router-link @click="burgerOff" to="/" class="burgerMenu__inner-list-item">Home</router-link></li>
                        <li><router-link @click="burgerOff" to="/like" class="burgerMenu__inner-list-item">Selected
                                Products</router-link></li>
                        <li><router-link to="/payment" class="burgerMenu__inner-list-item" @click="burgerOff">Payment and
                                delivery</router-link></li>
                        <li @click="scrollToBottom" class="burgerMenu__inner-list-item">Contacts</li>
                    </ul>
                </div>
            </div>
            <div class="header__inner__right">
                <router-link to="/productpage/shoppingcart" enter-class="header__inner__right-shop">
                    <div class="header__inner__right-shop-counter" v-show="show">{{ counter }}</div>
                    <img src="@/assets/images/cart.svg" alt="" class="header__inner__right-cart">
                </router-link>
                <div class="burger">
                    <img src="@/assets/images/burger.png" alt="" @click.stop="burgerOn">
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useShopCart } from '@/stores/ShoppingCart.js'

function scrollToBottom() {
    let height = document.body.scrollHeight;
    window.scroll(0, height);
    burger.value = false
    document.body.style.background = 'none'
    document.body.style.height = 'auto'
    document.body.style.overflow = 'visible'
}
const shopCartStore = useShopCart()
const burger = ref(false)
const counter = computed(() => shopCartStore.shopsArr.length)
const show = computed(() => counter.value == 0 ? false : true)


const burgerOn = () => {
    burger.value = true
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
    
    
}

const burgerOff = () => {
    burger.value = false
    document.body.style.height = 'auto'
    document.body.style.overflow = 'visible'
    
}

onMounted(() => {
    document.addEventListener("click", burgerOff);
});

onUnmounted(() => {
    document.removeEventListener("click", burgerOff);
});

</script>