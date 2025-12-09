<template>
  <ul>
    <li>Campaigns</li>
    <li>Personal Care</li>
    <li>skin care</li>
    <li>make - up</li>
    <li>mother & baby</li>
    <li>men care</li>
    <li>healthy life</li>
    <li>brands</li>
  </ul>
</template>

<style scoped>
ul {
  font-weight: 700;
  display: none;
  color: #2a2a48;
  font-size: var(--text-sm);
  padding-inline: 140px;
  justify-content: space-between;
  text-transform: uppercase;
}

li {
  list-style: none;
  padding: 1rem;
}

@media (min-width: 1200px) {
  ul {
    display: flex;
  }
}
</style>
