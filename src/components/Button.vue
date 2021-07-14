<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    disabled: Boolean as () => boolean,
    type: {
      type: String as () => 'router-link' | 'button' | 'a',
      default: 'button',
    },
  },
  setup({ disabled, type }) {
    const classes = `relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

    return {
      classes,
      disabled,
      type,
    };
  },
});
</script>
<template>
  <button v-if="type === 'button'" :class="classes"><slot /></button>
  <a v-else-if="type === 'a'" :class="classes"><slot /></a>
  <router-link v-else-if="type === 'router-link'" :class="classes"><slot /></router-link>
</template>
