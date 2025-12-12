<script setup>
const categories = [
  {
    title: 'Personal Care',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/personal.jpg',
  },
  {
    title: 'Skin Care',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/skin.jpg',
  },
  {
    title: 'Make - Up',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/makeup.jpg',
  },
  {
    title: 'Mother & Baby',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/motherbaby.jpg',
  },
];
</script>

<template>
  <section>
    <CategoriesHeader />
    <div class="categories">
      <CategoriesProduct
        v-for="category in categories"
        :key="category.title"
        :category="category"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
}

.categories {
  display: grid;
  grid-template-columns: 1;
  gap: 1rem;
}

@media (min-width: 1024px) {
  section {
    padding-inline: 340px;
    padding-block: 2.5rem;
  }
  .categories {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}
</style>
