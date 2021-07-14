<script lang="ts">
import { defineComponent, reactive } from '@vue/runtime-core';
import Lottie from '../components/misc/Lottie.vue';
import Radar from '../components/Radar.vue';
import { leagues } from '../data/leagues';

export default defineComponent({
  name: 'Home',
  components: {
    Lottie,
    Radar,
  },
  setup() {
    const state = reactive({
      selectedLeague: '',
    });

    const selectLeagueOptions = Object.keys(leagues).map((k) => ({ path: `/${k}`, title: leagues[k].title }));

    return {
      state,
      selectLeagueOptions,
    };
  },
});
</script>
<template>
  <div class="page wrapper" id="page-home">
    <Lottie class="anim1" url="https://assets10.lottiefiles.com/packages/lf20_ybiszbil.json" />
    <h1>Simule ton concours !</h1>
    <p>Simulateur d'admissibilité des Classes Préparatoires Scientifiques</p>

    <select class="fit my-1" v-model="state.selectedLeague">
      <option :value="''">Choisis ta filière</option>
      <option v-for="(o, i) in selectLeagueOptions" :key="i" :value="o.title">{{ o.title }}</option>
    </select>
    <router-link class="btn fit my-1" :class="{ disabled: !state.selectedLeague }" :to="'/simulate/' + state.selectedLeague.toLowerCase()"
      ><span>Démarrer</span></router-link
    >
  </div>
</template>
