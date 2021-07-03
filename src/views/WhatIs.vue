<template>
  <div class="hello">
    <p>Hey ! Tu es étudiant en classe préparatoire scientifique ?</p>

    <p>Simulons ensemble tes concours pour connaitre tes admissibilités.</p>

    <Lottie class="anim1" url="https://assets9.lottiefiles.com/private_files/lf30_txDBFP.json" />
  </div>
</template>

<script>
import Lottie from '../components/misc/Lottie.vue';

export default {
  name: 'HelloWorld',
  components: {
    Lottie: Lottie,
  },
  props: {
    msg: String,
  },
  methods: {
    launchSimulation() {
      this.$router.push('TSI');
    },
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
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
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
