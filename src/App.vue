<template>
  <div class="app">
    <div class="aside">
      <div class="choose">
        <span>theme: {{ theme }}</span>
        <button @click="theme = 'green-violet'">green-violet</button>
        <button @click="theme = 'orange-teal'">orange-teal</button>
        <span>mode: {{ mode }}</span>
        <button @click="mode = 'light'">light</button>
        <button @click="mode = 'dark'">dark</button>
        <span class="custom">
          <input
            type="text"
            v-model="themeName"
            placeholder="theme name"
          >
          <textarea v-model="editorContent"></textarea>
          <button @click="applyStyles">Apply Styles</button>
        </span>
      </div>
    </div>
    <div class="container">
      <nav>
        <router-link to="/colors">colors</router-link>
        <router-link to="/">home</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'green-violet',
      mode: 'light',
      editorContent: '',
      themeName: '',
      computedStyles: {},
      localStorageThemes: localStorage.themes
    }
  },
  watch: {
    theme() {
      document.body.dataset.theme = this.theme
    },
    mode() {
      document.body.dataset.mode = this.mode
    }
  },
  methods: {
    applyStyles() {
      // Парсим введенный код с переменными CSS
      const styles = this.parseCSSVariables(this.editorContent);

      // Создаем селектор для темы и применяем стили
      const themeSelector = `[data-theme="${this.themeName}"]`;
      this.computedStyles = {
        [themeSelector]: styles
      };
      if (!localStorage.themes?.length) {
        localStorage.themes = JSON.stringify([{
          name: themeSelector,
          css: this.computedStyles
        }])
      } else {
        const temp = JSON.parse(localStorage.themes)
        temp.push({
          name: themeSelector,
          css: this.computedStyles
        })
        localStorage.themes = JSON.stringify(temp)
      }
      this.localStorageThemes = JSON.parse(localStorage.themes)
    },
    parseCSSVariables(code) {
      // Парсим код с переменными CSS
      const styles = {};
      const lines = code.split('\n');
      lines.forEach(line => {
        const [property, value] = line.split(':').map(str => str.trim());
        if (property && value) {
          styles[property] = value;
        }
      });
      return styles;
    }
  },
  mounted() {
    document.body.dataset.theme = this.theme
    document.body.dataset.mode = this.mode
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
    color: var(--text-on-bg-on-default-text-primary);
  }
}

.custom {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
}
</style>