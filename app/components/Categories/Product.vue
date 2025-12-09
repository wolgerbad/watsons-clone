<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="product">
    <img :src="category.image" :alt="`${category.title} background image`" />
    <div class="body">
      <h4>{{ category.title }}</h4>
      <p>{{ category.description }}</p>
      <button>Browse</button>
    </div>
  </div>
</template>

<style scoped>
.product {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.body {
  position: absolute;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  text-align: center;
  border-radius: 6px;
}
h4 {
  color: #2a2a48;
  font-size: var(--text-xl);
  font-weight: 700;
}

p {
  font-size: var(--text-sm);
  font-weight: 400;
  color: #485363;
  line-height: 1.5rem;
}
button {
  text-transform: uppercase;
  background-color: var(--secondary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  width: fit-content;
  align-self: center;
  outline: 0;
  border: 0;
  color: white;
  font-size: var(--text-sm);
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background-color: #138a96;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
