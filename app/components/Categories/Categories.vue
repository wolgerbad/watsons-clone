<script setup>
const categories = [
  {
    title: 'Personal Care',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/personal.png',
  },
  {
    title: 'Skin Care',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/skin.png',
  },
  {
    title: 'Make - Up',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/makeup.png',
  },
  {
    title: 'Mother & Baby',
    description: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    image: '/images/categories/motherbaby.png',
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
}

@media (min-width: 1024px) {
  section {
    padding-inline: 21rem;
  }
  .categories {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}
</style>
