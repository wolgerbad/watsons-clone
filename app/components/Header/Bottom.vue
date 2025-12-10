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
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  list-style: none;
  padding: 1rem;
  transition: all 60ms ease-in-out;
}

li:hover {
  background-color: rgba(var(--smoke), 0.3);
}

@media (min-width: 1200px) {
  ul {
    display: flex;
  }
}
</style>
