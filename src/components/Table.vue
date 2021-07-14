<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    titles: {
      type: Object as () => string[],
      required: true,
    },
  },
  setup({ titles }) {
    return {
      titles,
    };
  },
});
</script>
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="(title, index) in titles"
                  :key="index"
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ title }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <slot />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
