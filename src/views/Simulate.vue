<script lang="ts">
import { computed, defineComponent, onMounted, onBeforeUnmount, reactive, ref, watch } from 'vue';

import { Chart, LineElement, PointElement, RadarController, RadialLinearScale } from 'chart.js';
import { leagues } from '../data/leagues';
import { useRoute } from 'vue-router';
import { getAverage } from '../helpers/average';
import { createRadarChart } from '../helpers/charts';

import Table from '../components/Table.vue';

Chart.register(RadialLinearScale, RadarController, PointElement, LineElement);

type Result = {
  name: string;
  note: number;
  threshold: number;
  delta: number;
  admitted: boolean;
};

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    // hooks
    const route = useRoute();

    const currentLeagueId = route.params['league'].toString();
    const currentContestId = route.params['contest'].toString();

    const currentContest = leagues[currentLeagueId].contests[currentContestId];

    const subjects = Object.keys(currentContest.banks[Object.keys(currentContest.banks)[0]].factors);

    // data
    const values = reactive<Record<string, number>>(Object.fromEntries(subjects.map((s) => [s, Math.round(Math.random() * 20)])));
    const radarNotesCanvas = ref<HTMLCanvasElement | null>(null);
    const radarAdmittedCanvas = ref<HTMLCanvasElement | null>(null);

    let radarNotesChart: Chart | undefined = undefined;
    let radarAdmittedChart: Chart | undefined = undefined;

    const items = computed<Record<string, Result>>(() => {
      const contest = leagues[currentLeagueId].contests[currentContestId];

      return Object.fromEntries(
        Object.keys(contest.banks).map((k) => {
          const bank = contest.banks[k];
          const av = getAverage(bank, values);

          return [
            k,
            {
              name: bank.title,
              note: av,
              threshold: bank.threshold,
              admitted: av > bank.threshold,
              delta: av - bank.threshold,
            },
          ];
        })
      );
    });

    const stopWatch = watch(
      items,
      () => {
        if (radarNotesChart) {
          radarNotesChart.data.datasets.forEach((dataset) => (dataset.data = Object.values(values)));
          radarNotesChart.update();
        }

        if (radarAdmittedChart) {
          radarAdmittedChart.data.datasets.filter((_, i) => i === 0).forEach((dataset) => (dataset.data = Object.values(items.value).map((i) => i.note)));
          radarAdmittedChart.update();
        }
      },
      {
        deep: true,
        immediate: true,
      }
    );

    onMounted(() => {
      if (radarNotesCanvas.value) {
        radarNotesChart = createRadarChart(radarNotesCanvas.value, subjects, [
          {
            label: 'Notes',
            data: Object.values(values),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
          },
        ]);
      }

      if (radarAdmittedCanvas.value) {
        radarAdmittedChart = createRadarChart(
          radarAdmittedCanvas.value,
          Object.values(items.value).map((i) => i.name),
          [
            {
              label: 'Notes',
              data: Object.values(items.value).map((i) => i.note),
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
            {
              label: "Barres d'admissibilité",
              data: Object.values(items.value).map((i) => i.threshold),
              fill: false,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(50, 205, 50)',
              pointBackgroundColor: 'rgb(50, 205, 50)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
          ]
        );
      }
    });

    onBeforeUnmount(stopWatch);

    return {
      values,
      subjects,
      items,
      radarNotesCanvas,
      radarAdmittedCanvas,
    };
  },
});
</script>
<template>
  <div class="wrapper">
    <h2>Entre tes notes</h2>
    <br>
    <input
      v-for="subject in subjects"
      :key="subject"
      class="label input"
      min="0"
      max="20"
      step="0.5"
      type="number"
      v-model="values[subject]"
      :placeholder="'Ta note pour ' + subject"
    />
    
    <br>
    <h2>À présent observe tes résultats !</h2>

    <Table :titles="['Banque', 'Note', 'Seuil', 'Différence', 'Admissible']">
      <tr v-for="(item, index) of items" :key="index">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">{{ item.name }}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm">
          {{
            item.note.toLocaleString('fr', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm">
          {{
            item.threshold.toLocaleString('fr', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm">
          {{
            item.delta.toLocaleString('fr', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm">{{ item.admitted ? 'Oui' : 'Non' }}</td>
      </tr>
    </Table>

    <canvas ref="radarNotesCanvas"></canvas>
    <canvas ref="radarAdmittedCanvas"></canvas>
  </div>
</template>
