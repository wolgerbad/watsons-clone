<template>
  <div class="top-header">
    <div class="breadcrumb">
      <div>
        <span>Homepage</span>

        <img src="/images/checkout/right-arrow.svg" alt="right arrow" />
      </div>
      <div>
        <span>Shopping Cart</span>

        <img src="/images/checkout/right-arrow.svg" alt="right arrow" />
      </div>
      <div>
        <span class="active">Checkout</span>
      </div>
    </div>

    <div class="checkout-header">
      <h2>Checkout</h2>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  font-size: var(--text-xs);
  font-weight: 400;
  color: #8493a8;
  gap: 0.5rem;
  align-items: center;
  padding-block: 1rem;
}

.checkout-header h2 {
  color: #2a2a48;
  font-size: 1.5rem;
  letter-spacing: -0.2px;
  line-height: 2rem;
}

.top-header {
  padding-inline: 1rem;
  background-color: rgba(var(--smoke), 0.3);
}

.breadcrumb div {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.active {
  color: var(--secondary);
}

.checkout-header {
  padding-bottom: 1rem;
}

@media (min-width: 1024px) {
  .checkout-header {
    padding: 0;
    color: #2a2a48;
  }

  .top-header {
    grid-column: 1 / -1;
    padding: 1.5rem 140px;
    /* padding-inline: 140px; */
  }
  .breadcrumb {
    margin-bottom: 1rem;
    padding: 0;
  }

  .checkout-header h2 {
    font-size: 34px;
    letter-spacing: 0;
    line-height: 3rem;
  }

  .breadcrumb span {
    font-size: var(--text-xs);
  }
}
</style>
