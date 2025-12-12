<template>
  <header>
    <h3>Featured products</h3>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #0099a8;
  margin-bottom: 1rem;
}

header::before,
header::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--secondary);
  opacity: 0.1;
}

header h3 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  padding-inline: 2rem;
}

@media (min-width: 1024px) {
  header {
    margin-bottom: 2.5rem;
  }
}
</style>
