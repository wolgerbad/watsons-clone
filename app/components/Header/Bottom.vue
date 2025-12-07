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
  display: none;
  color: #2a2a48;
  font-weight: bold;
  font-size: 14px;
  padding-inline: 140px;
  gap: 2rem;
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
