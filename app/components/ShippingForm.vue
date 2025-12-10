<template>
  <form class="form shipping-form">
    <header class="form-header">
      <img src="/images/checkout/shipping.svg" alt="shipping icon" />
      <h4>Shipping details</h4>
    </header>
    <div class="form-main">
      <div class="form-main-area">
        <label for="name" class="form-label">First Name *</label>
        <input type="text" id="name" name="name" />
      </div>
      <div class="form-main-area">
        <label for="lastname" class="form-label">Last Name *</label>
        <input type="text" name="lastname" id="lastname" />
      </div>
      <div class="form-main-area">
        <label for="email" class="form-label">Email Address *</label>
        <input type="text" name="email" id="email" />
      </div>
      <div class="form-main-area">
        <label for="phone" class="form-label">Phone Number *</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="+90 (5 _ _ ) _ _ _  _ _  _ _"
        />
      </div>
      <div class="form-main-area">
        <label for="city" class="form-label">City *</label>
        <select
          name="city"
          id="city"
          defaultValue="Please select"
          placeholder="Please select"
        >
          <option value="Please select">Please select</option>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
        </select>
      </div>
      <div class="form-main-area">
        <label for="district" class="form-label">District *</label>
        <select
          disabled
          name="district"
          id="district"
          defaultValue="Please select"
          placeholder="Please select"
        >
          <option value="Please select">Please select</option>
          <option value="Paris">Paris</option>
          <option value="London">London</option>
        </select>
      </div>
      <div class="form-main-area address">
        <label for="address" class="form-label">Address *</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter neighborhood, street, avenue and other information"
        />
      </div>
    </div>
  </form>
</template>

<style scoped>
.shipping-form {
  margin-bottom: 1rem;
}

textarea {
  height: 123px;
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

@media (min-width: 1024px) {
}
</style>
