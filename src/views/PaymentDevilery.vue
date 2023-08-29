<template>
  <div class="payment">
    <div class="payment__inner container">
      <div class="payment__inner__forms">
        <h3>Billing Address</h3>
        <form action="">
          <div class="payment__inner__forms-item">
            <span>First Name *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Last Name *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Country / Region *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Town / City *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item payment__inner__forms-itemStreet">
            <span>Street Address *</span>
            <div>
              <input type="text">
              <input type="text">
            </div>
          </div>
          <!-- <div class="payment__inner__forms-item">
            </div> -->
          <div class="payment__inner__forms-item">
            <span>Email address *</span>
            <input type="text">
          </div>
          <div class="payment__inner__forms-item">
            <span>Phone Number *</span>
            <input type="text">
          </div>
        </form>
        <div class="payment__inner__forms-diff">
          <input type="checkbox" name="" id="">
          <span>Ship to a different address?</span>
        </div>
        <div class="payment__inner__forms-notes">
          <span>Order notes (optional)</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="payment__inner__order">
        <h3>Your Order</h3>
        <div class="payment__inner__order__info">
          <div class="payment__inner__order__info__headers">
            <h4>Products</h4>
            <h4>Subtotal</h4>
          </div>

          <div class="payment__inner__info__order-cards">
            <div class="payment__inner__info__order-cards-item">
              <img src="@/assets/images/goodsitem.png" alt="" class="payment__inner__info__order-cards-item-img">
              <div class="payment__inner__info__order-cards-item-info">
                <h3>Samsung GalaxyA52 White 128Gb</h3>
                <p>SKU. SNKM10001-001</p>
              </div>
              <div class="payment__inner__info__order-cards-item-btns">
                (x1)
              </div>
              <div class="payment__inner__info__order-cards-item-total">
                $119.00
              </div>
              <button class="payment__inner__info__order-cards-item-trash">
                <img src="@/assets/images/trash.svg" alt="" srcset="">
              </button>
            </div>
            <div class="payment__inner__info__order-cards-item">
              <img src="@/assets/images/goodsitem.png" alt="" class="payment__inner__info__order-cards-item-img">
              <div class="payment__inner__info__order-cards-item-info">
                <h3>Samsung GalaxyA52 White 128Gb</h3>
                <p>SKU. SNKM10001-001</p>
              </div>
              <div class="payment__inner__info__order-cards-item-btns">
                (x1)
              </div>
              <div class="payment__inner__info__order-cards-item-total">
                $119.00
              </div>
              <button class="payment__inner__info__order-cards-item-trash">
                <img src="@/assets/images/trash.svg" alt="" srcset="">
              </button>
            </div>
          </div>
          <div class="payment__inner__info__order__money">
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Subtotal</span>
              <span class="payment__inner__info__order__money-item-amount">$138.00</span>
            </div>
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Coupon Discount</span>
              <span class="payment__inner__info__order__money-item-amount">(-) 00.00</span>
            </div>
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Shiping</span>
              <span class="payment__inner__info__order__money-item-amount">$16.00</span>
            </div>
            <a class="payment__inner__info__order__money-charge">
              View shipping charge
            </a>
            <div class="payment__inner__info__order__money-item">
              <span class="payment__inner__info__order__money-item-name">Total</span>
              <span class="payment__inner__info__order__money-item-amountTotal">$154.00</span>
            </div>
          </div>
          <btn class="payment__inner__info__order__money-btn">
            Place Order
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>