<template>
  <section>
    <div class="newsletter-container">
      <NewsletterHeader />
      <NewsletterForm />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f2f0ff;
}
.newsletter-container {
  padding: 1rem;
}

@media (min-width: 1024px) {
  section {
    padding-inline: 102.5px;
  }
  .newsletter-container {
    display: grid;
    grid-template-columns: 51.8% 48.2%;
    align-items: center;
    padding: 2.5rem;
  }
}
</style>
