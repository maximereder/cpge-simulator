<script>
import Lottie from '../components/misc/Lottie.vue';

export default {
  name: 'Home',
  components: {
    Lottie,
  },
  data() {
    return {
      value: '',
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
  <div class="page" id="page-home">
    <Lottie class="anim1" url="https://assets10.lottiefiles.com/packages/lf20_ybiszbil.json" />
    <h1>Simule ton concours !</h1>
    <p>Simulateur d'admissibilité des Classes Préparatoires Scientifiques</p>
    <br />

    <select class="select" placeholder="CPGE" v-model="value">
      <option v-for="(option, i) in options" :key="i" :value="i.toString()" :label="option.title">{{ option.title }}</option>
    </select>

    <div>
      <router-link class="btn" :to="value ? options[value].path : ''">Démarrer</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#page-home {
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .select {
    max-width: 10em;
    margin: 1em auto;
  }

  .btn {
    max-width: 20em;
    margin: 1em auto;
  }

  .m1 {
    max-width: 10em;
    margin: 1em auto;
  }

  .notif {
    max-width: 30em;
    margin: 1em auto;
  }

  .anim1 {
    max-width: 20em;
    margin: 1em auto;
  }
}
</style>
