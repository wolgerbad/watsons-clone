<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { id, price, title, thumbnail } = props.product;
const formattedPrice = price.toFixed(2).replaceAll('.', ',');

const { cart, addToCart } = useCart();

function handleAdd(product) {
  addToCart(product);
  console.log('cart', cart.value);
}
</script>

<template>
  <div class="product">
    <div class="image-container">
      <img :src="thumbnail" alt="Small product image" class="product-image" />
      <span class="product-hover">
        <button class="hover-item">
          <span class="hover-icon">
            <img src="/images/featured/view.svg" alt="view icon" />
          </span>
          <span class="hover-text">Quick view</span>
        </button>

        <img src="/images/featured/divider.svg" alt="divider icon" />

        <button
          class="hover-item"
          @click="handleAdd({ id, price, title, thumbnail })"
        >
          <span class="hover-icon">
            <img src="/images/featured/basket.svg" alt="basket icon" />
          </span>
          <span class="hover-text"> Add </span>
        </button>
      </span>
    </div>
    <div class="product-about">
      <h4>{{ formattedPrice }} TL</h4>
      <p class="product-title">{{ title }}</p>
    </div>

    <div class="button-container">
      <ButtonPrimary
        class="btn-featured"
        @click="handleAdd({ id, price, title, thumbnail })"
      >
        <img
          src="/images/featured/basket.svg"
          alt="basket icon"
          class="basket-icon"
        />
        <span>ADD</span>
      </ButtonPrimary>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--smoke), 0.5);
  border-radius: 6px;
  box-shadow: 0 1px 8px 0px rgba(0, 0, 0, 0.039);
  transition: all 100ms ease-in-out;
}

.product:hover {
  box-shadow: 0 24px 24px 0px rgba(0, 0, 0, 0.039);
}

.image-container {
  padding: 1rem;
  background-color: rgba(var(--smoke), 0.16);
  position: relative;
}

.product-about {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-about h4 {
  color: #2a2a48;
  font-size: var(--text-xl);
  font-weight: 700;
}

.product-image {
  width: 100%;
  object-fit: cover;
}

.button-container {
  padding: 1rem;
  font-weight: bold;
  border-top: 1px solid rgba(var(--smoke), 0.5);
}

.btn-featured {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
}

.product-title {
  color: #485363;
}

.hover-text {
  color: white;
  font-size: var(--text-sm);
  font-weight: 500;
  background-color: transparent;
  border: 0;
}

.product-hover {
  opacity: 0;
}

@media (min-width: 1024px) {
  .button-container {
    display: none;
  }

  .product-about {
    padding: 2rem;
  }

  .product-hover {
    display: flex;
    transition: all 60ms ease-in-out;
    position: absolute;
    line-height: 0;
    background-color: rgba(0, 0, 0, 0.8);
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
  }

  .product:hover .product-hover {
    opacity: 1;
  }

  .hover-item {
    border: 0;
    background-color: transparent;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding-inline: 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .hover-item:hover {
    background-color: #ffffff33;
  }

  .hover-icon,
  .hover-item {
    line-height: 1;
  }

  .hover-icon img {
    display: block;
  }

  .product-hover {
    padding-block: 0.5rem;
  }

  .hover-icon {
    line-height: 0;
  }

  .hover-item {
    line-height: 24px;
  }
}
</style>
