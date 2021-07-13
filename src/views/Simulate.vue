<script lang="ts">
import { defineComponent } from "vue";
import { leagues } from "../data/leagues";
import { getAverage } from "../helpers/average";
import { getKeys } from "../helpers/object";
const league = "tsi";
const contestId = "central";
type Result = {
	name: string;
	note: number;
	threshold: number;
	delta: number;
	admitted: boolean;
};

export default defineComponent({
	data: () => ({
		values: {},
	}),
	computed: {
		userStats() {
			return {
				m1: 20,
				m2: 12,
				p1: 12,
				p2: 15,
				sii: 14,
				info: 6,
				lv1: 10,
				fr: 3,
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
    bankName(): String[] {
      const contest = leagues[league].contests[contestId];
      const bankName = [];
			getKeys(contest.banks).map((k) => {
				bankName.push(contest.banks[k].title);
      });
      return bankName;
    },
    allAverage(): Number[] {
      const contest = leagues[league].contests[contestId];
      const notes = [];
			getKeys(contest.banks).map((k) => {
        const bank = contest.banks[k];
        const av = getAverage(bank, this.userStats);
				notes.push(av);
      });
      return notes;
    },
    allThreshold(): Number[] {
      const contest = leagues[league].contests[contestId];
      const thresholds = [];
			getKeys(contest.banks).map((k) => {
        const bank = contest.banks[k];
				thresholds.push(bank.threshold);
      });
      return thresholds;
    },
		subjects: () => {
			const bankKeys = getKeys(leagues[league].contests[contestId].banks);
			return getKeys(
				leagues[league].contests[contestId].banks[bankKeys[0]].factors
			);
		},
	},
	mounted() {
		const ctx1 = document.getElementById("radar-notes");
		new Chart(ctx1, {
			type: "radar",
			data: {
				labels: getKeys(
					leagues[league].contests[contestId].banks[
						getKeys(leagues[league].contests[contestId].banks)[0]
					].factors
				),

				datasets: [
					{
						label: "Notes",
						data: Object.values(this.userStats),
						fill: true,
						backgroundColor: "rgba(255, 99, 132, 0.2)",
						borderColor: "rgb(255, 99, 132)",
						pointBackgroundColor: "rgb(255, 99, 132)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgb(255, 99, 132)",
					},
				],
			},
			options: {
				responsive: true,
				elements: {
					line: {
						tension: 0,
						borderWidth: 2,
					},
				},

				scale: {
					ticks: {
						min: 0,
						max: 20,
						stepSize: 2,
					},
				},
			},
		});
		const ctx2 = document.getElementById("radar-admitted");
		new Chart(ctx2, {
			type: "radar",
			data: {
				labels: this.bankName,

				datasets: [
					{
						label: "Notes",
						data: this.allAverage,
						fill: false,
						backgroundColor: "rgba(255, 99, 132, 0.2)",
						borderColor: "rgb(255, 99, 132)",
						pointBackgroundColor: "rgb(255, 99, 132)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgb(255, 99, 132)",
          },
          {
						label: "Barres d'admissibilité",
						data: this.allThreshold,
						fill: false,
						backgroundColor: "rgba(255, 99, 132, 0.2)",
						borderColor: "rgb(50,205,50)",
						pointBackgroundColor: "rgb(50,205,50)",
						pointBorderColor: "#fff",
						pointHoverBackgroundColor: "#fff",
						pointHoverBorderColor: "rgb(255, 99, 132)",
					}
				],
			},
			options: {
				responsive: true,
				elements: {
					line: {
						tension: 0,
						borderWidth: 2,
					},
				},

				scale: {
					ticks: {
						min: 0,
						max: 20,
						stepSize: 2,
					},
				},
			},
		});
	},
});
</script>

<template>
	<div class="wrapper">
		<br />
		<h2>À présent, analysons les résultats !</h2>
		<input
			v-for="subject in subjects"
			:key="subject"
			class="label input"
			min="0"
			max="20"
			step="0.5"
			type="number"
			v-model="$data.values[subject]"
			:placeholder="'Ta note pour ' + subject"
		/>

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
						<td>
							{{
								item.note.toLocaleString("fr", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})
							}}
						</td>
						<td>
							{{
								item.threshold.toLocaleString("fr", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})
							}}
						</td>
						<td>
							{{
								item.delta.toLocaleString("fr", {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})
							}}
						</td>
						<td>{{ item.admitted ? "Oui" : "Non" }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<canvas id="radar-notes"></canvas>
		<canvas id="radar-admitted"></canvas>
	</div>
</template>