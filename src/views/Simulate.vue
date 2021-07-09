<script lang="ts">
import { defineComponent } from 'vue';
import { leagues } from '../data/leagues';
import { getAverage } from '../helpers/average';
import { getKeys } from '../helpers/object';
const league = 'tsi';
const contestId = 'central';
type Result = {
  name: string;
  note: number;
  threshold: number;
  delta: number;
  admitted: boolean;
};
export default defineComponent({
  data: () => ({
    values: {
			
		},
  }),
  computed: {
    userStats() {
      return {
				m1: 2,
				m2:2,
				p1:14,
				p2:5,
				sii:4,
				info: 6,
				lv1:10,
				fr:3
      };
    },
    items(): Result[] {
      const contest = leagues[league].contests[contestId];
      return getKeys(contest.banks).map((k) => {
        const bank = contest.banks[k];
        const av = getAverage(bank, this.userStats);
        return {
          name: bank.title,
          note: av,
          threshold: bank.threshold,
          admitted: av > bank.threshold,
          delta: av - bank.threshold,
        };
      });
    },
    subjects: () => {
      const bankKeys = getKeys(leagues[league].contests[contestId].banks);
      return getKeys(leagues[league].contests[contestId].banks[bankKeys[0]].factors);
    },
  },
});
</script>

<template>
  <div class="wrapper">
		<br>
    <h2>À présent, analysons les résultats !</h2>
		<input v-for="subject in subjects" :key="subject" class="label input" min="0" max="20" step="0.5" type="number" v-model="$data.values[subject]" :placeholder="'Ta note pour ' + subject" />
		

    <div class="table-wrapper my-2">
      <table class="">
        <thead>
          <tr>
            <th>Banque</th>
            <th>Note</th>
            <th>Seuil</th>
            <th>Différence</th>
            <th>Admissible</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.note.toLocaleString('fr', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ item.threshold.toLocaleString('fr', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ item.delta.toLocaleString('fr', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td>{{ item.admitted ? 'Oui' : 'Non' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>