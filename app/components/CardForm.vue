<template>
  <form class="form form-card">
    <header class="form-header">
      <img src="/images/checkout/payment.svg" alt="payment icon" />

      <span>Payment-details</span>
    </header>

    <div class="form-main">
      <div class="form-image">
        <img src="/images/checkout/credit-card.png" alt="Credit cart photo" />
      </div>
      <div class="form-main-content">
        <div class="form-main-area">
          <label for="holder-name">Card Holder Name *</label>
          <input type="text" name="holder-name" id="holder-name" />
          <span>Full name on card</span>
        </div>
        <div class="form-main-area">
          <label for="card-number">Card Number *</label>
          <input type="text" name="card-number" id="card-number" />
          <span>Enter digits without spaces</span>
        </div>
        <div class="form-date-aria">
          <div>
            <label for="expiry">Expiry Date *</label>

            <input
              type="text"
              name="expiry"
              id="expiry"
              placeholder="MM / YY"
            />
          </div>
          <div>
            <label for="cvv">CVV *</label>
            <span class="cvv-input">
              <input type="text" name="cvv" id="cvv" class="cvv" />
              <img src="/images/checkout/cvv.svg" alt="question mark icon" />
            </span>
          </div>
        </div>
        <span class="required">* Required field</span>
        <div>
          <ButtonPrimary class="btn-pay" disabled="true">Pay now</ButtonPrimary>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.required {
  color: #8493a8;
}

.cvv-input {
  line-height: 0;
  position: relative;
}

.cvv-input img {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.btn-pay {
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

input,
select,
textarea {
  font-size: 1rem;
  font-family: var(--font-roboto);
  color: rgba(42, 42, 72, 0.6);
  padding: 0.75rem 1rem;
  width: 100%;
  line-height: 1.5rem;
  border: 1px solid #ececec;
  border-radius: 4px;
  outline: none;
}

.form-image {
  margin-inline: 1rem;
}

@media (min-width: 1024px) {
  .form-image {
    order: 2;
  }
}
</style>
