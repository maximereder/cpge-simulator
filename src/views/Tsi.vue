<script>
import Lottie from '../components/misc/Lottie.vue';

import { factor } from '../data/factor';

export default {
  name: 'Tsi',
  components: {
    Lottie: Lottie,
  },
  data() {
    return {
      value: '',

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
  methods: {
    getAverage() {},
  },
  computed: {
    averageNative() {
      return (
        Math.round(
          ((this.centrale_m1 * factor.centrale.native.m1 +
            this.centrale_p2 * factor.centrale.native.p2 +
            this.centrale_m2 * factor.centrale.native.m2 +
            this.centrale_p1 * factor.centrale.native.p1 +
            this.centrale_sii * factor.centrale.native.sii +
            this.centrale_info * factor.centrale.native.info +
            this.centrale_lv1 * factor.centrale.native.lv1 +
            this.centrale_fr * factor.centrale.native.fr) /
            100) *
            100
        ) / 100
      );
    },
    differenceNative() {
      return Math.round((this.averageNative - factor.centrale.native.barre) * 100) / 100;
    },
    averageArts() {
      return (
        Math.round(
          ((this.centrale_m1 * factor.centrale.arts.m1 +
            this.centrale_m2 * factor.centrale.arts.m2 +
            this.centrale_p1 * factor.centrale.arts.p1 +
            this.centrale_p2 * factor.centrale.arts.p2 +
            this.centrale_sii * factor.centrale.arts.sii +
            this.centrale_info * factor.centrale.arts.info +
            this.centrale_lv1 * factor.centrale.arts.lv1 +
            this.centrale_fr * factor.centrale.arts.fr) /
            100) *
            100
        ) / 100
      );
    },
    averageEsix() {
      return (
        Math.round(
          ((this.centrale_m1 * factor.centrale.esix.m1 +
            this.centrale_m2 * factor.centrale.esix.m2 +
            this.centrale_p1 * factor.centrale.esix.p1 +
            this.centrale_p2 * factor.centrale.esix.p2 +
            this.centrale_sii * factor.centrale.esix.sii +
            this.centrale_info * factor.centrale.esix.info +
            this.centrale_lv1 * factor.centrale.esix.lv1 +
            this.centrale_fr * factor.centrale.esix.fr) /
            45) *
            100
        ) / 100
      );
    },
    averageIsmans() {
      return (
        Math.round(
          ((this.centrale_m1 * factor.centrale.ismans.m1 +
            this.centrale_m2 * factor.centrale.ismans.m2 +
            this.centrale_p1 * factor.centrale.ismans.p1 +
            this.centrale_p2 * factor.centrale.ismans.p2 +
            this.centrale_sii * factor.centrale.ismans.sii +
            this.centrale_info * factor.centrale.ismans.info +
            this.centrale_lv1 * factor.centrale.ismans.lv1 +
            this.centrale.ismans.fr * factor.centrale.ismans.fr) /
            100) *
            100
        ) / 100
      );
    },
    averageEstp() {
      return (
        Math.round(
          ((this.centrale * factor.centrale.estp.m1 +
            this.cenrale * factor.centrale.estp.m2 +
            this.cenrale * factor.centrale.estp.p1 +
            this.cenrale * factor.centrale.estp.p2 +
            this.centrale * factor.centrale.estp.sii +
            this.centrale * factor.centrale.estp.info +
            this.centrale * factor.centrale.estp.lv1 +
            this.centrale * factor.centrale.estp.fr) /
            100) *
            100
        ) / 100
      );
    },
    averageMineTelecom() {
      return (
        Math.round(
          ((this.centrale_m1 * factor.centrale.mine_telecom.m1 +
            this.centrale_m2 * factor.centrale.mine_telecom.m2 +
            this.centrale_p1 * factor.centrale.mine_telecom.p1 +
            this.centrale_p2 * factor.centrale.mine_telecom.p2 +
            this.centrale_sii * factor.centrale.mine_telecom.sii +
            this.centrale_info * factor.centrale.mine_telecom.info +
            this.centrale_lv1 * factor.centrale.mine_telecom.lv1 +
            this.centrale_fr * factor.centrale.mine_telecom.fr) /
            30) *
            100
        ) / 100
      );
    },
    eligibility() {
      var eligibility = [];
      for (let i = 0; i <= 6; i++) {
        if (this.averageNative >= factor.centrale.native.barre) {
          if (!eligibility.includes('Centrale')) {
            eligibility.push('Centrale');
          }
        }
        if (this.averageArts >= factor.centrale.arts.barre) {
          if (!eligibility.includes('Arts et Métiers')) {
            eligibility.push('Arts et Métiers');
          }
        }
        if (this.averageEsix >= factor.centrale.esix.barre) {
          if (!eligibility.includes('Esix')) {
            eligibility.push('Esix');
          }
        }
        if (this.averageIsmans >= factor.centrale.ismans.barre) {
          if (!eligibility.includes('Ismans')) {
            eligibility.push('Ismans');
          }
        }
        if (this.averageEstp >= factor.centrale.estp.barre) {
          if (!eligibility.includes('ESTP')) {
            eligibility.push('ESTP');
          }
        }
        if (this.averageMineTelecom >= factor.centrale.mine_telecom.barre) {
          if (!eligibility.includes('Mine Télécom')) {
            eligibility.push('Mine Télécom');
          }
        }
      }
      return eligibility;
    },
    items() {
      return [
        { name: 'Centrale Supélec', bar: factor.centrale.native.barre, note: this.averageNative, difference: this.differenceNative },
        { name: 'Arts et métiers', bar: factor.centrale.arts.barre, note: this.averageArts, difference: this.differenceNative },
        { name: 'Esix', bar: factor.centrale.esix.barre, note: this.averageEsix, difference: this.differenceNative },
        { name: 'Ismans', bar: factor.centrale.ismans.barre, note: this.averageIsmans, difference: this.differenceNative },
        { name: 'ESTP', bar: factor.centrale.estp.barre, note: this.averageEstp, difference: this.differenceNative },
        { name: 'Mine Télécom', bar: factor.centrale.mine_telecom.barre, note: this.averageMineTelecom, difference: this.differenceNative },
      ];
    },
  },
};
</script>

<template>
  <div class="hello">
    <Lottie class="anim1" url="https://assets2.lottiefiles.com/packages/lf20_9jXVOI.json" />
    <h1>Choisis ton concours</h1>
    <select class="select" placeholder="Concours" v-model="value">
      <option label="CCP" value="1">CCP</option>
      <option label="CCS" value="2">CCS</option>
    </select>
    <p v-show="value === '1'">Je suis ccp</p>

    <div v-if="value === '2'">
      <div class="box1">
        <p class="label">Mathématique 1</p>
        <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_m1" min="0" max="20.0"></b-form-spinbutton>
      </div>

      <p>Mathématique 2</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_m2" min="0" max="20.0"></b-form-spinbutton>
      <p>Physique-Chimie 1</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_p1" min="0" max="20.0"></b-form-spinbutton>
      <p>Physique-Chimie 2</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_p2" min="0" max="20.0"></b-form-spinbutton>
      <p>Sciences de l'industrielle</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_sii" min="0" max="20.0"></b-form-spinbutton>
      <p>Informatique</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_info" min="0" max="20.0"></b-form-spinbutton>
      <p>Langue vivante 1</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_lv1" min="0" max="20.0"></b-form-spinbutton>
      <p>Français-philosophie</p>
      <b-form-spinbutton class="spin" id="demo-sb" step="0.5" v-model="centrale_fr" min="0" max="20.0"></b-form-spinbutton>

      <p>{{ this.averageArts }}</p>
      <p>{{ this.averageEsix }}</p>

      <div class="analyse_text">
        <h2>À présent analysons !</h2>
        <Lottie class="anim1" url="https://assets9.lottiefiles.com/packages/lf20_1gamkm16.json" />
      </div>

      <br />

      <div class="table-wrapper my-2">
        <table class="sided">
          <thead>
            <tr>
              <th>Banque</th>
              <th>Barre</th>
              <th>Note</th>
              <th>Différence</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.bar}}</td>
              <td>{{item.note}}</td>
              <td>{{item.difference}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

.anim1 {
  max-width: 20em;
  margin: 1em auto;
}

.table {
  max-width: 50em;
  margin: 1em auto;
}

.analyse_text {
  text-align: left;
  padding-left: 10em;
}
</style>
