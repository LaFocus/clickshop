<template>
    <div class="modal">
        <div class="modal__header">
            <img src="@/assets/images/thanks.svg" alt="" srcset="">
            <img src="@/assets/images/close.svg" alt="" class="modal__header-close" >
        </div>
        <div class="modal__main">
            <h3>Order Details</h3>
            <div class="modal__main__inner">
                <div class="modal__main__inner-headers">
                    <h3>Products</h3>
                    <h3>Qty</h3>
                    <h3>Subtotal</h3>
                </div>
                <div class="modal__main__inner-items">
                    <div class="modal__main__inner-items-item">
                        <img src="@/assets/images/goodsitem.png" alt="" class="modal__main__inner-items-itemimg">
                        <div class="modal__main__inner-items-item-info">
                            <h3>Samsung GalaxyA52 White 128Gb</h3>
                            <p>SKU. SNKM10001-001</p>
                        </div>
                        <div class="modal__main__inner-items-item-btns">
                            (x1)
                        </div>
                        <div class="modal__main__inner-items-item-total">
                            $119.00
                        </div>
                        <button class="modal__main__inner-items-item-trash">
                            <img src="@/assets/images/trash.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class="modal__main__inner-items-item">
                        <img src="@/assets/images/goodsitem.png" alt="" class="modal__main__inner-items-itemimg">
                        <div class="modal__main__inner-items-item-info">
                            <h3>Samsung GalaxyA52 White 128Gb</h3>
                            <p>SKU. SNKM10001-001</p>
                        </div>
                        <div class="modal__main__inner-items-item-btns">
                            (x1)
                        </div>
                        <div class="modal__main__inner-items-item-total">
                            $119.00
                        </div>
                        <button class="modal__main__inner-items-item-trash">
                            <img src="@/assets/images/trash.svg" alt="" srcset="">
                        </button>
                    </div>
                </div>
                <div class="modal__inner-info">
                    <div class="modal__inner-info-item">
                        <span>Shiping</span>
                        <span>$16.00</span>
                    </div>
                    <div class="modal__inner-info-item">
                        <span>Total</span>
                        <span>$154.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>

<script setup>

</script>

<style lang="scss" scoped></style>