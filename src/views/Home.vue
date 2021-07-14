<script lang="ts">
import { defineComponent, reactive } from '@vue/runtime-core';
import Lottie from '../components/misc/Lottie.vue';
import Radar from '../components/Radar.vue';
import { leagues } from '../data/leagues';

import Button from '../components/Button.vue';
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';

export default defineComponent({
  name: 'Home',
  components: {
    Lottie,
    Radar,
    Button,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  },
  setup() {
    const selectLeagueOptions = Object.keys(leagues).map((k) => ({ path: `/${k}`, title: leagues[k].title }));

    const state = reactive({
      selectedLeague: selectLeagueOptions[0],
    });

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

    <Listbox as="div" v-model="state.selectedLeague" class="mb-4">
      <ListboxLabel class="block text-sm font-medium text-gray-700">Choisis ta filière</ListboxLabel>
      <div class="mt-1 relative">
        <ListboxButton
          class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <span class="ml-3 block truncate">{{ state.selectedLeague.title }}</span>
          <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"><i class='bx bxs-down-arrow'></i></span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <ListboxOption as="template" v-for="o in selectLeagueOptions" :key="o.path" :value="o" v-slot="{ active, selected }">
              <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ o.title }}
                </span>

                <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"><i class='bx bx-check' ></i></span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <Button type="router-link" :disabled="!state.selectedLeague" :to="state.selectedLeague.path">Démarrer</Button>
  </div>
</template>
