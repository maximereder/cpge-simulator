<script lang="ts">
import Lottie from '../components/misc/Lottie.vue';
import Radar from '../components/Radar.vue'
/* <router-link class="btn fit my-1" :class="{ disabled: !selectedLeague }" :to="selectedLeague ? options[selectedLeague].path : ''"><span>Démarrer</span></router-link>
*/

/* <option v-for="(option, i) in options" :key="i" :value="i.toString()">{{ option.title }}</option>
*/

export default {
  name: 'Home',
  components: {
    Lottie,
    Radar
  },
  data() {
    return {
      selectedLeague: '',
      options: [
        {
          path: '/mp',
          title: 'MP',
        },
        {
          path: '/pc',
          title: 'PC',
        },
        {
          path: '/psi',
          title: 'PSI',
        },
        {
          path: '/pt',
          title: 'PT',
        },
        {
          path: '/tb',
          title: 'TB',
        },
        {
          path: '/tpc',
          title: 'TPC',
        },
        {
          path: '/tsi',
          title: 'TSI',
        },
        {
          path: '/ats',
          title: 'ATS',
        },
      ],
    };
  },
};
</script>
<template>
  <div class="page wrapper" id="page-home">
    <Lottie class="anim1" url="https://assets10.lottiefiles.com/packages/lf20_ybiszbil.json" />
    <h1>Simule ton concours !</h1>
    <p>Simulateur d'admissibilité des Classes Préparatoires Scientifiques</p>

    <select class="fit my-1" v-model="selectedLeague">
      <option :value="''">CPGE</option>
      <option v-for="(option, i) in options" :key="i" :value="option.title">{{ option.title }}</option>
    </select>
    <router-link class="btn fit my-1" :class="{ disabled: !selectedLeague }" :to="'/simulate/' + selectedLeague.toLowerCase()"><span>Démarrer</span></router-link>
  </div>
  
</template>

<style lang="scss">
#page-home {
}
</style>
