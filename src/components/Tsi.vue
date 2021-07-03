<template>
  <div class="hello">
    <Lottie
      class="anim1"
      url="https://assets2.lottiefiles.com/packages/lf20_9jXVOI.json"
    />
    <h1>Choisis ton concours</h1>
    <vs-select class="select" placeholder="Concours" v-model="value">
      <vs-option label="CCP" value="1"> CCP </vs-option>
      <vs-option label="CCS" value="2"> CCS </vs-option>
    </vs-select>
    <p v-show="value === '1'">Je suis ccp</p>

    <div v-if="value === '2'">
      <div class="box1">
        <p class="label">Mathématique 1</p>
        <b-form-spinbutton
          class="spin"
          id="demo-sb"
          step="0.5"
          v-model="centrale_m1"
          min="0"
          max="20.0"
        ></b-form-spinbutton>
      </div>
      
      <p>Mathématique 2</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_m2"
        min="0"
        max="20.0"
      ></b-form-spinbutton>
      <p>Physique-Chimie 1</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_p1"
        min="0"
        max="20.0"
      ></b-form-spinbutton>
      <p>Physique-Chimie 2</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_p2"
        min="0"
        max="20.0"
      ></b-form-spinbutton>
      <p>Sciences de l'industrielle</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_sii"
        min="0"
        max="20.0"
      ></b-form-spinbutton>
      <p>Informatique</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_info"
        min="0"
        max="20.0"
      ></b-form-spinbutton>
      <p>Langue vivante 1</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_lv1"
        min="0"
        max="20.0"
      ></b-form-spinbutton>
      <p>Français-philosophie</p>
      <b-form-spinbutton
        class="spin"
        id="demo-sb"
        step="0.5"
        v-model="centrale_fr"
        min="0"
        max="20.0"
      ></b-form-spinbutton>

      <p>{{ this.averageArts }}</p>
      <p>{{ this.averageEsix }}</p>

      <div class="analyse_text">
        <h2>À présent analysons ! </h2>
            <Lottie
              class="anim1"
              url="https://assets9.lottiefiles.com/packages/lf20_1gamkm16.json"
            />
      </div>

      <br>

      <div>
        <b-table bordered="bordered"  striped hover :items="items"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "./Lottie.vue";

const factor = {
  centrale: {
    native: {
      m1: 12,
      m2: 12,
      p1: 11,
      p2: 11,
      sii: 20,
      info: 6,
      lv1: 11,
      fr: 17,
      barre: 1426 / 100,
    },
    arts: {
      m1: 11,
      m2: 11,
      p1: 11,
      p2: 11,
      sii: 25,
      lv1: 13,
      fr: 13,
      info: 5,
      barre: 1116 / 100,
    },
    esix: {
      m1: 5,
      m2: 5,
      p1: 5,
      p2: 5,
      sii: 10,
      lv1: 5,
      fr: 5,
      info: 5,
      barre: 1411 / 100,
    },
    ismans: {
      m1: 15,
      m2: 10,
      p1: 10,
      p2: 15,
      sii: 15,
      lv1: 10,
      fr: 10,
      info: 15,
      barre: 1264 / 100,
    },
    estp: {
      m1: 11,
      m2: 11,
      p1: 12,
      p2: 12,
      sii: 16,
      lv1: 12,
      fr: 20,
      info: 6,
      barre: 721 / 45,
    },
    mine_telecom: {
      m1: 5,
      m2: 3,
      p1: 3,
      p2: 3,
      sii: 6,
      lv1: 3,
      fr: 5,
      info: 2,
      barre: 319 / 30,
    },
  },
  ccp: {},
};
export default {
  name: "Tsi",
  components: {
    Lottie: Lottie,
  },
  methods: {
    launchSimulation() {
      this.$router.push("TSI");
    },
  },
  data() {
    return {
      value: "",
      centrale_m1: 0,
      c_m1: 10,
      centrale_m2: 0,
      c_m2: 1,
      centrale_p1: 0,
      c_p1: 1,
      centrale_p2: 0,
      c_p2: 1,
      centrale_sii: 0,
      c_sii: 1,
      centrale_info: 0,
      c_info: 1,
      centrale_lv1: 0,
      c_lv1: 1,
      centrale_fr: 0,
      c_fr: 1,

      /*============*/

      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },

  computed: {
    sayHello() {
      return "Hello!";
    },
    averageNative() {
      return (
        Math.round(
          ((this.$data.centrale_m1 * factor.centrale.native.m1 +
            this.$data.centrale_p2 * factor.centrale.native.p2 +
            this.$data.centrale_m2 * factor.centrale.native.m2 +
            this.$data.centrale_p1 * factor.centrale.native.p1 +
            this.$data.centrale_sii * factor.centrale.native.sii +
            this.$data.centrale_info * factor.centrale.native.info +
            this.$data.centrale_lv1 * factor.centrale.native.lv1 +
            this.$data.centrale_fr * factor.centrale.native.fr) /
            100) *
            100
        ) / 100
      );
    },
    differenceNative() {
      return (
        Math.round(
          (this.averageNative-factor.centrale.native.barre) * 100
        ) / 100
      );
    },
    averageArts() {
      return (
        Math.round(
          ((this.$data.centrale_m1 * factor.centrale.arts.m1 +
            this.$data.centrale_m2 * factor.centrale.arts.m2 +
            this.$data.centrale_p1 * factor.centrale.arts.p1 +
            this.$data.centrale_p2 * factor.centrale.arts.p2 +
            this.$data.centrale_sii * factor.centrale.arts.sii +
            this.$data.centrale_info * factor.centrale.arts.info +
            this.$data.centrale_lv1 * factor.centrale.arts.lv1 +
            this.$data.centrale_fr * factor.centrale.arts.fr) /
            100) *
            100
        ) / 100
      );
    },
    averageEsix() {
      return (
        Math.round(
          ((this.$data.centrale_m1 * factor.centrale.esix.m1 +
            this.$data.centrale_m2 * factor.centrale.esix.m2 +
            this.$data.centrale_p1 * factor.centrale.esix.p1 +
            this.$data.centrale_p2 * factor.centrale.esix.p2 +
            this.$data.centrale_sii * factor.centrale.esix.sii +
            this.$data.centrale_info * factor.centrale.esix.info +
            this.$data.centrale_lv1 * factor.centrale.esix.lv1 +
            this.$data.centrale_fr * factor.centrale.esix.fr) /
            45) *
            100
        ) / 100
      );
    },
    averageIsmans() {
      return (
        Math.round(
          ((this.$data.centrale_m1 * factor.centrale.ismans.m1 +
            this.$data.centrale_m2 * factor.centrale.ismans.m2 +
            this.$data.centrale_p1 * factor.centrale.ismans.p1 +
            this.$data.centrale_p2 * factor.centrale.ismans.p2 +
            this.$data.centrale_sii * factor.centrale.ismans.sii +
            this.$data.centrale_info * factor.centrale.ismans.info +
            this.$data.centrale_lv1 * factor.centrale.ismans.lv1 +
            this.$data.centrale.ismans.fr * factor.centrale.ismans.fr) /
            100) *
            100
        ) / 100
      );
    },
    averageEstp() {
      return (
        Math.round(
          ((this.$data.centrale * factor.centrale.estp.m1 +
            this.$data.cenrale * factor.centrale.estp.m2 +
            this.$data.cenrale * factor.centrale.estp.p1 +
            this.$data.cenrale * factor.centrale.estp.p2 +
            this.$data.centrale * factor.centrale.estp.sii +
            this.$data.centrale * factor.centrale.estp.info +
            this.$data.centrale * factor.centrale.estp.lv1 +
            this.$data.centrale * factor.centrale.estp.fr) /
            100) * 100
        ) / 100
      );
    },
    averageMineTelecom() {
      return (
        Math.round(
          ((this.$data.centrale_m1 *
            factor.centrale.mine_telecom.m1 +
            this.$data.centrale_m2 *
              factor.centrale.mine_telecom.m2 +
            this.$data.centrale_p1 *
              factor.centrale.mine_telecom.p1 +
            this.$data.centrale_p2 *
              factor.centrale.mine_telecom.p2 +
            this.$data.centrale_sii *
              factor.centrale.mine_telecom.sii +
            this.$data.centrale_info *
              factor.centrale.mine_telecom.info +
            this.$data.centrale_lv1 *
              factor.centrale.mine_telecom.lv1 +
            this.$data.centrale_fr *
              factor.centrale.mine_telecom.fr) /
            30) * 100) / 100
      );
    },
    eligibility() {
      var eligibility = [];
      for (let i = 0; i <= 6; i++) {
        if (this.averageNative >= factor.centrale.native.barre) {
          if (!eligibility.includes("Centrale")) {
            eligibility.push("Centrale");
          }
        }
        if (this.averageArts >= factor.centrale.arts.barre) {
          if (!eligibility.includes("Arts et Métiers")) {
            eligibility.push("Arts et Métiers");
          }
        }
        if (this.averageEsix >= factor.centrale.esix.barre) {
          if (!eligibility.includes("Esix")) {
            eligibility.push("Esix");
          }
        }
        if (this.averageIsmans >= factor.centrale.ismans.barre) {
          if (!eligibility.includes("Ismans")) {
            eligibility.push("Ismans");
          }
        }
        if (this.averageEstp >= factor.centrale.estp.barre) {
          if (!eligibility.includes("ESTP")) {
            eligibility.push("ESTP");
          }
        }
        if (
          this.averageMineTelecom >=
          factor.centrale.mine_telecom.barre
        ) {
          if (!eligibility.includes("Mine Télécom")) {
            eligibility.push("Mine Télécom");
          }
        }
      }
      return eligibility;
    },
    items() {
       return [
        { name: "Centrale Supélec",bar: factor.centrale.native.barre, note: this.averageNative, difference: this.differenceNative,},
        { name: "Arts et métiers",bar: factor.centrale.arts.barre, note: this.averageArts, difference: this.differenceNative,},
        { name: "Esix", bar: factor.centrale.esix.barre, note: this.averageEsix, difference: this.differenceNative },
        { name: "Ismans", bar: factor.centrale.ismans.barre, note: this.averageIsmans, difference: this.differenceNative },
        { name: "ESTP", bar: factor.centrale.estp.barre, note: this.averageEstp, difference: this.differenceNative },
        { name: "Mine Télécom", bar: factor.centrale.mine_telecom.barre, note: this.averageMineTelecom, difference: this.differenceNative },
      ]
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
