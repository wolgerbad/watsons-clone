<template>
  <section>
    <span class="left-icon">
      <img src="/images/hero/left.png" alt="" />
    </span>
    <span class="right-icon">
      <img src="/images/hero/right.png" alt="" />
    </span>
    <div class="content-container">
      <div class="text">
        <div class="text-header">
          <h6>Naturals by watsons</h6>
          <h2>The new 2021 collection</h2>
        </div>

        <p class="text-description">
          Known as "the miracle plant", Aloe Vera helps to nourish, moisturize
          and keep the hair looking smooth. Let your hair be flexible and fresh.
        </p>

        <button class="shop-btn">Shop Now</button>

        <div>
          <img src="/images/hero/progress.png" alt="Progress bar" />
        </div>
      </div>
      <div class="content">
        <img src="/images/hero/hero.png" alt="Hero image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
  background-color: #f2f0ff;
}

.content-container {
  padding-inline: 140px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.text {
  padding-block: 88px;
}

.text-header {
  margin-bottom: 1rem;
}

.text-description {
  margin-bottom: 1rem;
}
h6 {
  text-transform: uppercase;
  font-weight: bold;
  color: #8493a8;
}
h2 {
  color: #2a2a48;
  font-weight: bold;
}
p {
  color: #485363;
}

.shop-btn {
  background-color: #ff27ad;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 40px;
}

.left-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 44px;
  z-index: 10;
  cursor: pointer;
}

.right-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 28px;
  z-index: 10;
  cursor: pointer;
}
</style>
