<template>
  <div class="app-header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/whatis">What is ?</router-link>
    </div>
  </div>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <div class="app-footer">Footer</div>
</template>

<style lang="scss">
#app {
  display: grid;
  grid-template: auto 1fr auto / minmax(0, 1fr);
  gap: 0px 0px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  min-height: 100vh;

  .app-header {
    grid-area: header;
  }

  .app-main {
    grid-area: main;
  }

  .app-footer {
    grid-area: footer;
  }
}
</style>
