<template>
  <nav>
    <div>
      <img src="/images/topbar/logo.png" alt="Application logo" />
    </div>
    <div class="right">
      <div class="search-container">
        <span>
          <img src="/images/topbar/inputsearch.png" alt="search icon" />
        </span>
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
        <img src="/images/topbar/show.png" />
      </div>
      <span class="search-icon">
        <img src="/images/topbar/search.png" alt="Search icon" />
      </span>
      <span>
        <img src="/images/topbar/basket.png" alt="Basket icon" />
      </span>
      <span class="hamburger">
        <img src="/images/topbar/hamburger.png" alt="Hamburger menu icon" />
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
  padding-block: 1rem;
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
  background-color: rgba(236, 236, 236, 0.3);
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
}

.user-name span {
  color: #8493a8;
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
