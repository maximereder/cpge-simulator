<script lang="ts">
import { Chart } from "chart.js";
import { getKeys } from "../helpers/object";
import { leagues } from "../data/leagues";
import userStats from "../views/Simulate.vue"

const league = "tsi";
const contestId = "central";
const data = Object.values(userStats);

const radarData = {
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
				data: data,
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
};

export default {
	name: "Radar",
	/* TO DO: Bank data watcher*/
	props: {
		league: {
			type: String,
			default: "tsi",
		},
		data: {
			type: Array,
			default: [65, 59, 90, 81, 56, 55, 40],
		},
		hello: {
			type: String,
		},
	},
	data() {
		return {
			radarData: radarData,
		};
	},
	computed: {
		getLabels() {
			return getKeys(
				leagues[league].contests[contestId].banks[
					getKeys(leagues[league].contests[contestId].banks)[0]
				].factors
			);
		},
		getData() {
			return data;
		},
	},
	mounted() {
		const canvas = this.$refs['chart'] as HTMLCanvasElement;
		new Chart(canvas, this.radarData as any);
	},
};
</script>

<template>
	<div>
		<canvas ref="chart"></canvas>
	</div>
</template>