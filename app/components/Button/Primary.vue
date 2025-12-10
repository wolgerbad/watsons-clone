<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: var(--primary);
  width: 100%;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 700;
}
</style>
