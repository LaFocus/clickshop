<template>
    <header class="header">
        <div class="header__inner container">
            <router-link class="header__inner-logo" to="/">
                <img src="@/assets/images/logo.svg" alt="">
            </router-link>

            <ul class="header__inner-list">
                <li><router-link to="/" class="header__inner-list-item">Home</router-link></li>
                <li><router-link to="/like" class="header__inner-list-item">Selected Products</router-link></li>
                <li><router-link to="/payment" class="header__inner-list-item">Payment and delivery</router-link></li>
                <li @click="scrollToBottom" class="header__inner-list-item">Contacts</li>
            </ul>

            <div class="header__inner__right">
                <router-link to="/productpage/shoppingcart">
                    <img src="@/assets/images/cart.svg" alt="" class="header__inner__right-cart">
                </router-link>
                <button class="header__inner__right-btn"> Login </button>
            </div>

        </div>
    </header>
</template>

<script setup>
function scrollToBottom()
{
    let height = document.body.scrollHeight;
    window.scroll(0 , height);
}
</script>