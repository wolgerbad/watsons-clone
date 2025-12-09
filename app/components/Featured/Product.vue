<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const { id, price, title, thumbnail } = props.product;
const formattedPrice = price.toFixed(2).replaceAll('.', ',');
</script>

<template>
  <div class="product">
    <div class="image-container">
      <img :src="thumbnail" alt="Small product image" class="product-image" />
    </div>
    <div class="product-about">
      <h4>{{ formattedPrice }} TL</h4>
      <p class="product-title">{{ title }}</p>
    </div>

    <div class="button-container">
      <ButtonPrimary class="btn-featured">
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.image-container {
  padding: 1rem;
  background-color: rgba(var(--smoke), 0.16);
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

@media (min-width: 1024px) {
  .button-container {
    display: none;
  }

  .product-about {
    padding: 2rem;
  }
}
</style>
