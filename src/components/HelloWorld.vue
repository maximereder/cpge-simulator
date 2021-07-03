<template>
  <div class="hello">
    <Lottie class="anim1" url="https://assets10.lottiefiles.com/packages/lf20_ybiszbil.json"/>
    <h1>{{ msg }}</h1>

    <p>
      Simulateur d'admissibilité des Classes Préparatoires Scientifiques<br>
    </p>

    <vs-select class="select" placeholder="CPGE" v-model="value">
        <vs-option label="MP" value="1">
          MP
        </vs-option>
        <vs-option label="PC" value="2">
          PC
        </vs-option>
        <vs-option label="PSI" value="3">
          PSI
        </vs-option>
        <vs-option label="PT" value="4">
          PT
        </vs-option>
        <vs-option label="TB" value="5">
          TB
        </vs-option>
        <vs-option label="TPC" value="6">
          TPC
        </vs-option>
        <vs-option label="TSI" value="7">
          TSI
        </vs-option>
        <vs-option label="ATS" value="8">
          ATS
        </vs-option>
      </vs-select>

    <p class="notavailable" v-if="selected === 'TEST' && selected !==null">Oups ! Le simulateur ne prend pas encore en charge la classe <strong>{{ selected }}</strong>.</p>

    <vs-button
        class="btn"
        v-show="value === '7'"
        size="large"
        gradient
        :active="active == 0"
        @click="launchSimulation()"
      >Démarrer
    </vs-button>

    <vs-button
        class="btn"
        gradient
        v-show="value !== '7'"
        disabled
      >
        Démarrer
      </vs-button>
  </div>
</template>




<script>
import Lottie from './Lottie.vue'
export default {
  name: 'HelloWorld',
  components: {
    Lottie: Lottie
  },
  props: {
    msg: String
  },
   methods: {
        launchSimulation () {
            this.$router.push('TSI')
        }
  },
  data() {
      return {
        value: '',
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
}
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
</style>
