<template>
    <footer class="footer">
        <div class="footer__inner container">
            <img src="@/assets/images/logofooter.svg" alt="" srcset="">
            <div class="footer__inner__nav">
                <ul class="footer__inner__nav__list">
                    <!-- <li class="footer__inner__nav__list-item">Home</li>
                    <li class="footer__inner__nav__list-item">Payment and delivery</li>
                    <li class="footer__inner__nav__list-item">Product card</li>-->
                    <div>
                        <li><router-link @click="scrollToTop" to="/" class="footer__inner__nav__list-item">Home</router-link></li>
                        <li><router-link @click="scrollToTop" to="/like" class="footer__inner__nav__list-item">Selected Products</router-link></li>
                    </div>
                    <div>
                        <li><router-link @click="scrollToTop" to="/payment" class="footer__inner__nav__list-item">Payment and delivery</router-link></li>
                        <li><router-link @click="scrollToTop" class="footer__inner__nav__list-item" to="/productpage/shoppingcart">Shop</router-link></li>
                    </div>
                </ul>
            </div>
            <div class="footer__inner__contacts">
                <h4>Contacts</h4>
                <ul>
                    <li><img src="@/assets/images/location.svg" alt="">70 West Buckingham Ave.
                        Farmingdale, NY 11735</li>
                    <li><img src="@/assets/images/phone.svg" alt="">+88 01911 717 490</li>
                    <li><img src="@/assets/images/mail.svg" alt="">contact@sportdriven.com</li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
function scrollToTop() {
    // let height = document.body.scrollHeight;
    window.scroll(0, 0);

}
</script>

<style lang="scss" scoped></style>