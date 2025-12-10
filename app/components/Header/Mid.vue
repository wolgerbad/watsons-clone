<script setup>
const { toggleOpen } = useOpen();
const { cartLength } = useCart();
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
        <img src="/images/topbar/avatar.png" class="avatar" alt="avatar" />
        <img src="/images/topbar/show.svg" />
      </div>
      <span class="search-icon">
        <img src="/images/topbar/mobile-search.svg" alt="Search icon" />
      </span>
      <NuxtLink to="/cart/checkout" class="basket-link">
        <img src="/images/topbar/basket.svg" class="basket" alt="Basket icon" />
        <span v-if="cartLength" class="basket-count">{{ cartLength }}</span>
      </NuxtLink>
      <span class="hamburger" @click="toggleOpen">
        <img src="/images/topbar/hamburger.svg" alt="Hamburger menu icon" />
      </span>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
}

.right {
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: end;
  gap: 2rem;
}

.search-container {
  display: none;
}

.user {
  display: none;
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

.avatar {
  width: 36px;
  height: 36px;
  object-fit: cover;
}

.basket-link {
  position: relative;
}

.basket-count {
  color: white;
  font-size: var(--text-xs);
  font-weight: 700;
  line-height: 1rem;
  background-color: #fa4c44;
  padding-inline: 4px;
  position: absolute;
  right: -4px;
  top: -12px;
  border-radius: 40px;
  border: 2px solid white;
}

@media (min-width: 1200px) {
  nav {
    height: 72px;
    padding: 0 140px;
  }
  .search-icon {
    display: none;
  }
  .hamburger {
    display: none;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search-container {
    display: flex;
    width: 560px;
    background-color: rgba(var(--smoke), 0.3);
    gap: 0.5rem;
    align-items: center;
    color: #8493a8;
    border-radius: 10rem;
    padding: 9px;
  }

  .search-input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
}
</style>
