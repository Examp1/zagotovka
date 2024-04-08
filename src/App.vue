<template>
  <div class="app">
    <div class="aside">
      <div class="choose">
        <span>theme: test test test testtesttesttest{{ theme }}</span>
        <button @click="setTheme('green-violet')">green-violet</button>
        <button @click="setTheme('orange-teal')">orange-teal</button>
        <button
          v-for="theme in localStorageThemes"
          :key="'theme' + '-' + theme.name"
          @click="setTheme(theme.name)"
        >{{ theme.name }}</button>
        <span>mode: {{ mode }}</span>
        <button @click="mode = 'light'">light</button>
        <button @click="mode = 'dark'">dark</button>
        <span class="custom">
          <input
            type="text"
            v-model="themeName"
            placeholder="theme name"
          >
          <textarea
            v-model="editorContent"
            rows="3"
          ></textarea>
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
      localStorageThemes: JSON.parse(localStorage.themes)
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
    setTheme(theme) {
      this.theme = theme
      this.addGlobalStyles()
    },
    applyStyles() {
      const styles = this.parseCSSVariables(this.editorContent);
      const themeSelector = `[data-theme="${this.themeName}"]`;
      this.computedStyles = {
        [themeSelector]: styles
      };
      if (!localStorage.themes?.length) {
        localStorage.themes = JSON.stringify([{
          name: this.themeName,
          css: this.computedStyles
        }])
      } else {
        const temp = JSON.parse(localStorage.themes)
        temp.push({
          name: this.themeName,
          css: this.computedStyles
        })
        localStorage.themes = JSON.stringify(temp)
      }
      this.localStorageThemes = JSON.parse(localStorage.themes)
    },
    parseCSSVariables(code) {
      const styles = {};
      const lines = code.split('\n');
      lines.forEach(line => {
        const [property, value] = line.split(':').map(str => str.trim());
        if (property && value) {
          styles[property] = value;
        }
      });
      return styles;
    },
    addGlobalStyles() {
      const styleElement = document.createElement('style');
      let cssText = '';

      const currentTheme = this.localStorageThemes.filter(el => el.name === this.theme)

      const css = currentTheme[0].css
      for (const selector in css) {
        cssText += `${selector} {\n`;
        for (const property in css[selector]) {
          cssText += `  ${property}: ${css[selector][property]};\n`;
        }
        cssText += `}\n`;
      }

      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    },
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