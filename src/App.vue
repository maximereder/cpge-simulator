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
