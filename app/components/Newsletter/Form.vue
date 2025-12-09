<template>
  <form>
    <input type="text" placeholder="Your email address" />

    <ButtonPrimary class="btn-subscribe">SUBSCRIBE</ButtonPrimary>
  </form>
</template>

<style scoped>
form {
  display: flex;
  align-items: center;
  gap: 1rem;
}

input {
  border: 1px solid rgb(var(--smoke));
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  flex: 1;
  padding: 1rem;
  color: rgba(42, 42, 72, 0.6);
  height: fit-content;
  outline: 0;
}

.btn-subscribe {
  padding: 1rem;
  width: fit-content;
}
</style>
