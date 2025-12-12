<template>
  <Breadcrumb />
  <div class="app-container">
    <div class="container">
      <div class="cart">
        <CartSummary />
      </div>
      <div class="forms">
        <ShippingForm />
        <CardForm />
      </div>
    </div>
  </div>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-container {
  border-bottom: 1px solid rgb(var(--smoke));
}

.form-main {
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-main-area,
.form-date-aria div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-main-area label,
.form-date-aria label {
  color: #2a2a48;
  line-height: 1.5rem;
  font-size: var(--text-sm);
  font-weight: 400;
}

.form-date-aria {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.form-main-area span {
  color: rgba(42, 42, 72, 0.6);
  font-size: var(--text-xs);
}

.form-main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-header {
  display: flex;
  align-items: center;
  background-color: rgba(var(--smoke), 0.3);
  padding: 1rem;
  gap: 1rem;
}

.form-header h4 {
  color: #2a2a48;
  font-size: var(--text-xl);
  font-weight: 500;
}

@media (min-width: 1024px) {
  .container {
    display: grid;
    margin-inline: 140px;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    gap: 2.5rem;
  }

  .cart {
    grid-column: 2 / 3;
    order: 2;
    margin-bottom: 2rem;
    padding-block: 2rem;
  }

  .forms {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    grid-column: 1 / 2;
    order: 1;
    padding-block: 2rem;
  }
  .form {
    gap: 2rem;
  }

  .form-main {
    gap: 0;
    margin-inline: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 2.5rem;
  }

  .form-header {
    background-color: #fff;
    padding: 0;
  }
}
</style>
