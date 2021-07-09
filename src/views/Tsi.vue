<script lang="ts">
import Lottie from '../components/misc/Lottie.vue';
import { leagues } from "../data/leagues";
export default {
  name: 'Tsi',
  components: {
    Lottie,
  },
  data() {
    return {
      selectedContest: '',
      centrale_m1: 0,
      centrale_m2: 0,
      centrale_p1: 0,
      centrale_p2: 0,
      centrale_sii: 0,
      centrale_info: 0,
      centrale_lv1: 0,
      centrale_fr: 0,
      centrale: {
        m1: 0,
        m2: 0,
        p1: 0,
        p2: 0,
        sii: 0,
        info: 0,
        lv1: 0,
        fr: 0,
      },
    };
  },
};
</script>

<template>
  <div class="hello">
    <Lottie class="anim" url="https://assets2.lottiefiles.com/packages/lf20_9jXVOI.json" />
    <h1>Choisis ton concours</h1>
    <select class="select" placeholder="Concours" v-model="selectedContest">
      <option label="CCP" value="1">CCP</option>
      <option label="CCS" value="2">CCS</option>
    </select>
    <p v-show="selectedContest === '1'">Je suis ccp</p>

    <div v-if="selectedContest === '2'">
      <div class="analyse_text">
        <Lottie class="anim" url="https://assets8.lottiefiles.com/packages/lf20_x9c4hmtd.json" />
      </div>
      <div class="label cadre">
        <p class="label title">Mathématique 1</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_m1">
      </div>
      <div class="label cadre">
        <p class="label title">Mathématique 2</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_m2">
      </div>
      <div class="label cadre">
        <p class="label title">Physique-Chimie 1</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_p1">
      </div>
      <div class="label cadre">
        <p class="label title">Physique-Chimie 2</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_p2">
      </div>
      <div class="label cadre">
        <p class="label title">Sciences de l'industrielle</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_sii">
      </div>
      <div class="label cadre">
        <p class="label title">Informatique</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_info">
      </div>
      <div class="label cadre">
        <p class="label title">Langue vivante 1</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_lv1">
      </div>
      <div class="label cadre">
        <p class="label title">Français-philosophie</p>
        <input class="label input" min="0" max="20" step="0.5" type="number" v-model="centrale_fr">
      </div>
    </div>
      <p> {{ centrale_m1 }}</p>
  </div>
</template>
<style scoped lang="scss">
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
a {
  color: #42b983;
}
.select {
  max-width: 10em;
  margin: 1em auto;
}
.btn {
  max-width: 50em;
  margin: 1em auto;
}
.spin {
  max-width: 10em;
  margin: 1em auto;
}
.m1 {
  max-width: 10em;
  margin: 1em auto;
}
.container {
  margin: 1em auto;
}
.anim {
  max-width: 20em;
  margin: 1em auto;
}
.table {
  max-width: 50em;
  margin: 1em auto;
}
.analyse_text {
  max-width: 20em;
  margin: 1em auto;
}
</style>