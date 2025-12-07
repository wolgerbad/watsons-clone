<template>
  <section>
    <span class="left-icon">
      <img src="/images/hero/left.png" alt="" />
    </span>
    <span class="right-icon">
      <img src="/images/hero/right.png" alt="" />
    </span>
    <div class="content-container">
      <div class="content">
        <img src="/images/hero/hero.png" alt="Hero image" />
      </div>
      <div class="text">
        <div class="text-header">
          <h6>Naturals by watsons</h6>
          <h2>The new 2021 collection</h2>
        </div>

        <p class="text-description">
          Known as "the miracle plant", Aloe Vera helps to nourish, moisturize
          and keep the hair looking smooth. Let your hair be flexible and fresh.
        </p>

        <ButtonPrimary>Shop Now</ButtonPrimary>

        <div class="progress">
          <img src="/images/hero/progress.png" alt="Progress bar" />
        </div>
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
  padding: 1rem;

  display: grid;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);
}

.content img {
  width: 100%;
}

.text {
  padding-top: 1rem;
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

.left-icon {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 44px;
  z-index: 10;
  cursor: pointer;
}

.right-icon {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 28px;
  z-index: 10;
  cursor: pointer;
}

.progress {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .content-container {
    grid-template-columns: repeat(2, 1fr);
    padding-inline: 140px;
  }

  .text {
    order: 1;
  }
  .content {
    order: 2;
  }
  .left-icon {
    display: block;
  }
  .right-icon {
    display: block;
  }

  .shop-btn {
    width: fit-content;
    margin-bottom: 2.5rem;
  }
  .progress {
    display: block;
  }
}
</style>
