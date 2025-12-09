<script setup>
const { data: products, error, status } = await useFetch('/api/products');

const filteredProducts = products.value.slice(0, 2);

const subTotal = filteredProducts
  .reduce((acc, cur) => acc + cur.price, 0)
  .toFixed(2);
const shipping = (10.5).toFixed(2);
</script>

<template>
  <div class="breadcrumb">
    <div>
      <span>Homepage</span>

      <img src="/images/checkout/right-arrow.svg" alt="right arrow" />
    </div>
    <div>
      <span>Shopping Cart</span>

      <img src="/images/checkout/right-arrow.svg" alt="right arrow" />
    </div>
    <div>
      <span class="active">Checkout</span>
    </div>
  </div>
  <div class="header">
    <h2>Checkout</h2>
  </div>
  <div class="cart-summary">
    <h4>Shopping cart summary</h4>
    <div>
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="cart-item"
      >
        <span class="product-image-container">
          <img
            :src="product.thumbnail"
            alt="small product thumbnail photo"
            class="thumbnail"
          />
        </span>
        <div class="cart-content">
          <h3>{{ product.title }}</h3>
          <div class="cart-bottom">
            <p>{{ product.price }} TL</p>
            <div class="quantity">
              <button class="btn-icon">
                <img src="/images/checkout/plus.svg" alt="plus icon" />
              </button>
              <span>1</span>
              <button class="btn-icon">
                <img src="/images/checkout/minus.svg" alt="plus icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <input type="text" placeholder="Discount code" />
    </div>
    <div class="total">
      <div class="total-item">
        <span>Subtotal</span>
        <span>{{ subTotal }} TL</span>
      </div>
      <div class="total-item item-shipping">
        <span>Shipping</span>
        <span>{{ shipping }} TL</span>
      </div>
      <div class="total-item item-bottom">
        <span>Total</span>
        <span>{{ (+subTotal + +shipping).toFixed(2) }} TL</span>
      </div>
    </div>
  </div>
  <form class="shipping-form">
    <header class="form-header">
      <img src="/images/checkout/shipping.svg" alt="shipping icon" />
      <h4>Shipping details</h4>
    </header>
    <div class="form-main">
      <div class="form-main-area">
        <label for="name" class="form-label">First Name *</label>
        <input type="text" id="name" name="name" />
      </div>
      <div class="form-main-area">
        <label for="lastname" class="form-label">Last Name *</label>
        <input type="text" name="lastname" id="lastname" />
      </div>
      <div class="form-main-area">
        <label for="email" class="form-label">Email Address *</label>
        <input type="text" name="email" id="email" />
      </div>
      <div class="form-main-area">
        <label for="phone" class="form-label">Phone Number *</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+90 (5 _ _ ) _ _ _  _ _  _ _"
        />
      </div>
      <div class="form-main-area">
        <label for="city" class="form-label">City *</label>
        <select
          name="city"
          id="city"
          defaultValue="Please select"
          placeholder="Please select"
        >
          <option value="Please select">Please select</option>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
        </select>
      </div>
      <div class="form-main-area">
        <label for="district" class="form-label">District *</label>
        <select
          disabled
          name="district"
          id="district"
          defaultValue="Please select"
          placeholder="Please select"
        >
          <option value="Please select">Please select</option>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
        </select>
      </div>
      <div class="form-main-area">
        <label for="address" class="form-label">Address *</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter neighborhood, street, avenue and other information"
        />
      </div>
    </div>
  </form>
  <form class="form-card">
    <header class="form-header">
      <img src="/images/checkout/payment.svg" alt="payment icon" />

      <span>Payment-details</span>
    </header>
    <div class="form-image">
      <img src="/images/checkout/credit-card.png" alt="Credit cart photo" />
    </div>

    <div class="form-main">
      <div class="form-main-area">
        <label for="holder-name">Card Holder Name *</label>
        <input type="text" name="holder-name" id="holder-name" />
        <span>Full name on card</span>
      </div>
      <div class="form-main-area">
        <label for="card-number">Card Number *</label>
        <input type="text" name="card-number" id="card-number" />
        <span>Enter digits without spaces</span>
      </div>
      <div class="form-date-aria">
        <div>
          <label for="expiry">Expiry Date *</label>
          <input type="text" name="expiry" id="expiry" placeholder="MM / YY" />
        </div>
        <div>
          <label for="cvv">CVV *</label>
          <input type="text" name="cvv" id="cvv" />
        </div>
      </div>
      <span class="required">* Required field</span>
      <div>
        <ButtonPrimary class="btn-pay">Pay now</ButtonPrimary>
      </div>
    </div>
  </form>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  color: #8493a8;
  padding: 1rem;
  gap: 0.5rem;
  align-items: center;
}

.breadcrumb div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.active {
  color: var(--secondary);
}

.header {
  padding: 0 0 1rem 1rem;
}

.cart-summary {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1rem;
  margin-inline: 1rem;
}
.cart-item {
  display: flex;
  align-items: center;
}
.cart-content {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-main {
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-main-area,
.form-date-aria div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-date-aria {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.form-main-area span {
  color: rgba(42, 42, 72, 0.6);
  font-size: 12px;
}

.required {
  color: #8493a8;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

input,
select,
textarea {
  padding: 0.75rem 1rem;
  width: 100%;
  border: 1px solid #ececec;
  border-radius: 4px;
  outline: none;
}

textarea {
  height: 123px;
}

.btn-icon {
  color: #485363;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #ececec;
  border-radius: 4px;
  border: 1px solid rgba(236, 236, 236, 0.3);
  padding: 4px 6px;
  font-size: 1.4rem;
  font-weight: medium;
}

.form-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(var(--smoke));
}

.form-image {
  margin-inline: 1rem;
}

.cart-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumbnail {
  width: 84px;
  padding: 1rem;
}

.total {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item-shipping {
  padding-bottom: 1rem;
  border-bottom: 1px solid #ececec;
}

.item-bottom {
  font-weight: bold;
}

.total-item {
  display: flex;
  justify-content: space-between;
}

.form-header {
  display: flex;
  align-items: center;
  background-color: rgba(var(--smoke), 0.3);
  padding: 1rem;
  gap: 1rem;
}

.shipping-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.product-image-container {
  background-color: rgba(var(--smoke), 0.16);
  line-height: 0;
}

.form-label {
  margin-bottom: 0.5rem;
}

.btn-pay {
  padding: 0.5rem 1rem;
  background-color: #ff27ad;
  border-radius: 4px;
}
</style>
