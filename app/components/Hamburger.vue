<script setup>
const { toggleOpen } = useOpen();
const activeTab = ref(null);

function handleActiveTab(val) {
  activeTab.value = val;
  console.log(activeTab.value);
}
</script>

<template>
  <section>
    <header class="hamburger-header hamburger-top-item">
      <img
        src="/images/hamburger/close.svg"
        alt="close icon"
        @click="toggleOpen"
      />

      <h4>Menu</h4>
    </header>
    <div class="container" v-if="!activeTab">
      <div
        class="hamburger-item hamburger-top-item"
        @click="handleActiveTab('Campaigns')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />
        <p>Campaigns</p>
      </div>
      <div
        class="hamburger-item hamburger-top-item"
        @click="handleActiveTab('Personal Care')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />
        <p>Personal Care</p>
      </div>
      <div
        class="hamburger-item hamburger-top-item"
        @click="handleActiveTab('Skin Care')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />
        <p>Skin Care</p>
      </div>
      <div
        class="hamburger-item hamburger-top-item"
        @click="handleActiveTab('Make - up')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />

        <p>Make - up</p>
      </div>
      <div
        class="hamburger-item hamburger-top-item"
        @click="handleActiveTab('Mother & Baby')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />
        <p>Mother & Baby</p>
      </div>
      <div
        class="hamburger-item hamburger-top-item"
        @click="handleActiveTab('Healthy Life')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />
        <p>Healthy Life</p>
      </div>
      <div
        class="hamburger-item hamburger-top-item last"
        @click="handleActiveTab('Brands')"
      >
        <img src="/images/hamburger/left-arrow.svg" alt="arrow icon" />
        <p>Brands</p>
      </div>

      <div class="hamburger-bot">
        <div class="hamburger-item hamburger-bot-item">
          <p>My profile</p>

          <img src="/images/hamburger/user.svg" alt="user icon" />
        </div>
        <div class="hamburger-item hamburger-bot-item">
          <p>Order history</p>

          <img src="/images/hamburger/history.svg" alt="user icon" />
        </div>
        <div class="hamburger-item hamburger-bot-item">
          <p>Help center</p>

          <img src="/images/hamburger/help.svg" alt="user icon" />
        </div>
        <div class="hamburger-item hamburger-bot-item">
          <p>Log out</p>
          <img src="/images/hamburger/logout.svg" alt="user icon" />
        </div>
      </div>
    </div>
    <div v-else class="active-tab">
      <div class="active-header" @click="handleActiveTab(null)">
        <p>{{ activeTab }}</p>
        <img src="/images/hamburger/right-arrow.svg" alt="right arrow icon" />
      </div>
      <ul>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum Dolor</li>
        <li>Lorem Ipsum Dolor Sit</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1rem;
}

.hamburger-item {
  margin-inline: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ececec;
}

.hamburger-top-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger-bot-item p {
  font-size: 14px;
}
.last {
  border: 0;
  padding: 0;
}

p {
  font-size: 1rem;
  font-weight: 500;
}

.hamburger-bot {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 1rem;
  background-color: rgba(236, 236, 236, 0.3);
}

.hamburger-bot-item {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
}

.hamburger-header {
  background-color: #f2f0ff;
  align-items: center;
  padding: 1rem;
  border: 0;
  margin: 0;
}

.active-tab {
  margin-inline: 1rem;
  border-bottom: 1px solid #ececec;
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.active-header {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(236, 236, 236, 0.3);
  border-radius: 6px;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;
  color: #485363;
}
</style>
