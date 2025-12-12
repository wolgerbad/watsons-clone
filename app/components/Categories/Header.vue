<template>
  <header>
    <h3>Featured Categories</h3>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}

header::before,
header::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--secondary);
  opacity: 0.1;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  color: var(--secondary);
  margin-inline: 2rem;
}

@media (min-width: 1024px) {
  header {
    margin-bottom: 2.5rem;
  }
}
</style>
