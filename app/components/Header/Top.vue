<template>
  <header>
    <div class="top-items">
      <div class="top-item left">
        <span>
          <img src="/images/topbar/store.svg" alt="Store icon" />
        </span>
        <span>Stores</span>
      </div>
      <div class="top-item left">
        <span>
          <img src="/images/topbar/catalog.svg" alt="Catalog icon" />
        </span>
        <span>Catalog</span>
      </div>
    </div>
    <div class="spot-text">
      <h4>Watsons Beauty and Personal Care Awards Nominees!</h4>
    </div>
    <div class="top-item">
      <p class="call-paragraph">Call us:(+90) 850 123 45 67</p>
      <img src="/images/topbar/phone.svg" alt="Phone icon" />
    </div>
  </header>
</template>

<style scoped>
header {
  color: white;
  font-weight: 500;
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
  font-size: var(--text-sm);
  font-weight: 500;
}
.left {
  padding-inline: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 60ms ease-in-out;
}

.left span {
  line-height: 1.5rem;
}

.left:hover {
  background-color: #ffffff33;
}

.spot-text {
  display: none;
  color: rgba(var(--smoke), 0.5);
}

.spot-text h4 {
  font-size: var(--text-sm);
  font-weight: 400;
}

span {
  display: flex;
  align-items: center;
}

.call-paragraph {
  display: none;
}

@media (min-width: 1200px) {
  .spot-text {
    display: block;
  }

  .call-paragraph {
    display: inline-block;
  }

  header {
    padding: 0.5rem 140px;
  }
}
</style>
