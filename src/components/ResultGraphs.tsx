import React, { useEffect, useRef } from 'react';

import { Chart, LineElement, PointElement, RadarController, RadialLinearScale } from 'chart.js';
import { createRadarChart } from '../helpers/charts';
import { Subject } from '../types';

Chart.register(RadialLinearScale, RadarController, PointElement, LineElement);

type Item = {
	name: string;
	note: number;
	threshold: number;
	delta: number;
	admitted: boolean;
};

export type ResultGraphsProps = {
	subjects: Record<string, Subject>;
	values: Record<string, string | undefined>;
	items: Record<string, Item>;
};

export const ResultGraphs: React.FC<ResultGraphsProps> = ({
	subjects,
	values,
	items,
}) => {
	const radarNotesCanvas = useRef<HTMLCanvasElement>(null!);
	const radarAdmittedCanvas = useRef<HTMLCanvasElement>(null!);

	const radarNotesChart = useRef<Chart | undefined>(undefined);
	const radarAdmittedChart = useRef<Chart | undefined>(undefined);

	const normalizedValues = Object.keys(subjects).map(k => Number(values[k]) || 0);

	useEffect(() => {
		radarNotesChart.current = createRadarChart(radarNotesCanvas.current, Object.values(subjects).map(s => s.title), [
			{
				label: 'Notes',
				data: normalizedValues,
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)',
			},
		]);

		radarAdmittedChart.current = createRadarChart(
			radarAdmittedCanvas.current,
			Object.values(items).map((i) => i.name),
			[
				{
					label: 'Notes',
					data: Object.values(items).map((i) => i.note),
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
					data: Object.values(items).map((i) => i.threshold),
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

		return () => {
			radarNotesChart.current?.destroy();
		}
	}, []);

	useEffect(() => {
		if (radarNotesChart.current) {
			radarNotesChart.current.data.datasets.forEach(dataset => (dataset.data = normalizedValues));
			radarNotesChart.current.update();
		}

		if (radarAdmittedChart.current) {
			radarAdmittedChart.current.data.datasets.filter((_, i) => i === 0).forEach((dataset) => (dataset.data = Object.values(items).map(i => i.note)));
			radarAdmittedChart.current.update();
		}
	}, [normalizedValues]);

	return <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 mt-8`}>
		<div>
			<div className={`font-semibold text-xl`}>Notes</div>
			<canvas ref={radarNotesCanvas}></canvas>
		</div>
		<div>
			<div className={`font-semibold text-xl`}>Admissibilités</div>
			<canvas ref={radarAdmittedCanvas}></canvas>
		</div>
	</div>;
};
