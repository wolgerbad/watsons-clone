<script setup>
const { toggleOpen } = useOpen();
</script>

<template>
  <nav>
    <NuxtLink to="/">
      <img src="/images/topbar/logo.svg" alt="Application logo" />
    </NuxtLink>
    <div class="right">
      <div class="search-container">
        <img src="/images/topbar/input-search.svg" alt="search icon" />
        <input
          type="text"
          class="search-input"
          placeholder="Write the product or category you are looking for"
        />
      </div>

      <div class="user">
        <span class="user-name">
          <span>Hello,</span>
          <h4>Clara Clara</h4>
        </span>
        <img src="/images/topbar/avatar.svg" class="avatar" alt="avatar" />
        <img src="/images/topbar/show.svg" />
      </div>
      <span class="search-icon">
        <img src="/images/topbar/mobile-search.svg" alt="Search icon" />
      </span>
      <NuxtLink to="/cart/checkout">
        <img src="/images/topbar/basket.svg" class="basket" alt="Basket icon" />
      </NuxtLink>
      <span class="hamburger" @click="toggleOpen">
        <img src="/images/topbar/hamburger.svg" alt="Hamburger menu icon" />
      </span>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding-inline: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
}

.right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.search-container {
  width: 560px;
  display: none;
  gap: 0.5rem;
  align-items: center;
  color: #8493a8;
  background-color: rgba(var(--smoke), 0.3);
  border-radius: 10rem;
  padding: 9px;
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
}

.user {
  display: none;
  align-items: center;
  gap: 1rem;
}

.user-name {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: var(--text-sm);
}

.user-name span {
  color: #8493a8;
}

.user-name h4 {
  color: #2a2a48;
  font-weight: 500;
}

a {
  line-height: 0;
}

span {
  line-height: 0;
}

@media (min-width: 1200px) {
  nav {
    padding-inline: 140px;
  }
  .search-icon {
    display: none;
  }
  .hamburger {
    display: none;
  }

  .user {
    display: flex;
  }

  .search-container {
    display: flex;
  }
}
</style>
