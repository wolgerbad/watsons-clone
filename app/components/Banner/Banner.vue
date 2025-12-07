<template>
  <img src="/images/desktop-banner.png" class="img-desktop" />
  <img src="/images/mobile-banner.png" class="img-mobile" />
</template>

<style scoped>
img {
  width: 100%;
  object-fit: contain;
}

.img-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .img-desktop {
    display: block;
  }
  .img-mobile {
    display: none;
  }
}
</style>
