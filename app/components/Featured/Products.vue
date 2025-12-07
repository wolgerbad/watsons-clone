<script setup>
const { data: products, status, error } = await useFetch('/api/products');

console.log('products', products.value);
</script>

<template>
  <div class="grid-container">
    <FeaturedProduct
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
}
</style>
