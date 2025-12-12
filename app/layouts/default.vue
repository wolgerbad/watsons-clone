<script setup>
const { isOpen } = useOpen();
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
  <Transition name="hamburger">
    <Hamburger v-if="isOpen" />
  </Transition>
</template>

<style>
.hamburger-enter-active,
.hamburger-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.hamburger-enter-active section,
.hamburger-leave-active section {
  transition: transform 0.3s ease-in-out;
}

.hamburger-enter-from section {
  transform: translateX(100%);
}

.hamburger-enter-to section {
  transform: translateX(0);
}

.hamburger-leave-from section {
  transform: translateX(0);
}

.hamburger-leave-to section {
  transform: translateX(100%);
}

.hamburger-enter-from {
  opacity: 0;
}

.hamburger-enter-to {
  opacity: 1;
}

.hamburger-leave-from {
  opacity: 1;
}

.hamburger-leave-to {
  opacity: 0;
}
</style>
