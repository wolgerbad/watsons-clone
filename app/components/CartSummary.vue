<script setup>
const { cart, addToCart, removeCart } = useCart();

const subTotal = computed(() =>
  cart?.value.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)
);
const shipping = (10.5).toFixed(2);
function handleAdd(product) {
  addToCart(product);
}

function handleRemove(id) {
  removeCart(id);
}
</script>

<template>
  <div class="cart-summary">
    <h4 class="summary-title">Shopping cart summary</h4>
    <div v-if="cart.length">
      <div class="cart-container">
        <div v-for="product in cart" :key="product.id" class="cart-item">
          <span class="product-image-container">
            <img
              :src="product.thumbnail"
              alt="small product thumbnail photo"
              class="thumbnail"
            />
          </span>
          <div class="cart-content">
            <h3 class="product-title">{{ product.title }}</h3>
            <div class="cart-bottom">
              <p class="product-price">
                {{ product.price.toFixed(2).replaceAll('.', ',') }} TL
              </p>
              <div class="quantity">
                <button class="btn-icon" @click="handleAdd(product)">
                  <img src="/images/checkout/plus.svg" alt="plus icon" />
                </button>
                <span>{{ product.quantity }}</span>
                <button class="btn-icon" @click="handleRemove(product.id)">
                  <img src="/images/checkout/minus.svg" alt="minus icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <input type="text" placeholder="Discount code" />
        </div>
        <div class="total">
          <div class="total-item">
            <h5 class="total-item-first">Subtotal</h5>
            <h5 class="price">{{ subTotal.replaceAll('.', ',') }} TL</h5>
          </div>
          <div class="total-item item-shipping">
            <h5 class="total-item-first">Shipping</h5>
            <h5 class="price">{{ shipping.replaceAll('.', ',') }} TL</h5>
          </div>
          <div class="total-item item-bottom">
            <h4 class="total-subtitle">Total</h4>
            <h4 class="total-price">
              {{ (+subTotal + +shipping).toFixed(2).replaceAll('.', ',') }} TL
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <span> There are no item found in the cart. </span>
      <NuxtLink to="/"> Go checkout our products </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.cart-summary {
  margin-inline: 1rem;
  padding-block: 1rem;
}

.cart-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary-title {
  color: #2a2a48;
  font-size: var(--text-xl);
  padding-block: 4px;
  margin-bottom: 1rem;
}
.cart-item {
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(55, 65, 81, 0.08);
  border-radius: 6px;
}
.cart-content {
  flex: 1;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-title {
  font-size: var(--text-sm);
  line-height: 1.5rem;
  font-weight: 500;
}

.product-price {
  font-size: var(--text-sm);
  line-height: 1.5rem;
  font-weight: 400;
}

.btn-icon {
  color: #485363;
  cursor: pointer;
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

.cart-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumbnail {
  width: 100%;
  height: 100%;
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

.item-bottom h4 {
  flex: 1;
  color: #2a2a48 !important;
  font-size: var(--text-xl);
  font-weight: 700;
}

.total-price {
  display: flex;
  justify-content: end;
}

.total-item {
  display: flex;
  gap: 1rem;
  color: #485363;
}
.total-item-first {
  font-weight: 400;
}

.total-item h5 {
  flex: 1;
  font-size: var(--text-md);
  line-height: 1rem;
}

.product-image-container {
  background-color: rgba(var(--smoke), 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 116px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

input {
  font-size: 1rem;
  font-family: var(--font-roboto);
  color: rgba(42, 42, 72, 0.6);
  padding: 0.75rem 1rem;
  width: 100%;
  line-height: 1.5rem;
  border: 1px solid #ececec;
  border-radius: 4px;
  outline: none;
}

.price {
  font-weight: 500;
  display: flex;
  justify-content: end;
}

.not-found {
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .cart-summary {
    margin-inline: 0;
  }

  .cart-container {
    gap: 1.5rem;
    padding: 1.5rem;
    box-shadow: 0px 4px 16px 0px rgba(42, 42, 72, 0.039);
    border: 1px solid rgb(var(--smoke));
    border-radius: 6px;
    margin-bottom: 0;
  }
}
</style>
