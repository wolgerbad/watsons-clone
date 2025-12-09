<template>
  <header>
    <div class="top-items">
      <div class="top-item">
        <span>
          <img src="/images/topbar/store.png" alt="Store icon" />
        </span>
        <span>Stores</span>
      </div>
      <div class="top-item">
        <span>
          <img src="/images/topbar/catalog.png" alt="Catalog icon" />
        </span>
        <span>Catalog</span>
      </div>
    </div>
    <div class="spot-text">
      <h4>Watsons Beauty and Personal Care Awards Nominees!</h4>
    </div>
    <span>
      <img src="/images/topbar/phone.png" alt="Phone icon" />
    </span>
  </header>
</template>

<style scoped>
header {
  color: white;
  background-color: #505357;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
}

.top-items {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.top-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spot-text {
  display: none;
  color: rgb(var(--smoke));
  opacity: 0.5;
}

span {
  display: flex;
  align-items: center;
}

@media (min-width: 1200px) {
  .spot-text {
    display: block;
  }

  header {
    padding: 0.5rem 140px;
  }
}
</style>
