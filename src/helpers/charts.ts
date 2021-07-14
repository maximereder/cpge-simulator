import { Chart, ChartDataset, LineElement, PointElement, RadarController, RadialLinearScale } from 'chart.js';

Chart.register(RadialLinearScale, RadarController, PointElement, LineElement);

type DatasetOptions = ChartDataset<"radar", (number | null)[]>

export const createRadarChart = (el: HTMLCanvasElement, labels: string[], datasets: DatasetOptions[] = []) => {
	return new Chart(el, {
		type: 'radar',
		data: {
			labels: labels,
			datasets,
		},
		options: {
			responsive: true,
			elements: {
				line: {
					tension: 0,
					borderWidth: 2,
				},
			},
			scales: {
				r: {
					angleLines: {
						display: false,
					},
					suggestedMin: 0,
					suggestedMax: 20,
				},
			},
		},
	})
}
