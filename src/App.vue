<template>
  <div
    :data-theme="theme"
    :data-mode="mode"
    class="app"
  >
    <div class="aside">
      <div class="choose">
        <span>theme: {{ theme }}</span>
        <button @click="theme = 'green-violet'">green-violet</button>
        <button @click="theme = 'orange-teal'">orange-teal</button>
        <span>mode: {{ mode }}</span>
        <button @click="mode = 'light'">light</button>
        <button @click="mode = 'dark'">dark</button>
      </div>
    </div>
    <div class="container">
      <nav>
        <router-link to="/colors">colors</router-link>
        <router-link to="/">home</router-link>
      </nav>
      <router-view></router-view>
      <app-img-and-text></app-img-and-text>
    </div>
  </div>
</template>

<script>
import AppImgAndText from './components/app-img-and-text.vue'
export default {
  components: { AppImgAndText },
  data() {
    return {
      theme: 'green-violet',
      mode: 'light'
    }
  },

}
</script>

<style lang="scss">
@import './assets/global.scss';

.container {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  grid-gap: 20px;
}

.app {
  display: grid;
  grid-template-columns: 2fr 12fr;
}

.aside {
  height: fit-content;
  position: sticky;
  top: 0;
  .choose {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    text-align: center;
  }

  span {
    grid-column: 1/span 2;
  }
}
</style>