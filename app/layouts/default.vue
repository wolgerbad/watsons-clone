<script setup>
const { isOpen } = useOpen();
</script>

<template>
  <Hamburger v-if="isOpen" />
  <div v-else>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style></style>
