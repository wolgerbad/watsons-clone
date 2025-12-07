<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: #ff27ad;
  width: 100%;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
</style>
