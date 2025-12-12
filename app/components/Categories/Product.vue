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
    <img :src="category.image" alt="product image" />
    <div class="wrapper">
      <div class="body">
        <h4>{{ category.title }}</h4>
        <p>{{ category.description }}</p>
        <button>Browse</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  position: relative;
  border: 1px solid rgba(var(--smoke), 0.5);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.039);

  transition: all 100ms ease-in-out;
}

.product:hover {
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.039),
    0px 24px 24px rgba(0, 0, 0, 0.059), 0px -6px 30px rgba(0, 0, 0, 0.059);
}

.product:hover .body {
  background-color: white;
}

img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;

  z-index: -10;
}

.wrapper {
  padding: 2.5rem;
}

.body {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  border-radius: 6px;
  transition: all 100ms ease-in-out;
}
h4 {
  width: 100%;
  color: #2a2a48;
  font-size: var(--text-xl);
  font-weight: 700;
}

p {
  width: 100%;
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

@media (min-width: 1024px) {
  .wrapper {
    padding: 4rem;
  }
}
</style>
