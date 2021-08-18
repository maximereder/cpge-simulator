import { ChartDataset } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title, Legend } from 'chart.js';

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title, Legend);

export type Dataset = Omit<ChartDataset<'bar'>, 'data'>;

export type GraphProps = {
	title: string;
	labels: string[];
	datas: number[][];
	datasets: Dataset[];
}

export const Graph: React.FC<GraphProps> = ({
	title,
	labels,
	datas,
	datasets,
}) => {
	const canvas = useRef<HTMLCanvasElement>(null!);
	const chart = useRef<Chart>();

	useEffect(() => {
		chart.current = new Chart(canvas.current, {
			type: 'bar',
			data: {
				labels: labels.map(l => l.length > 6 ? `${l.substr(0, 8)}...` : l),
				datasets: datasets.map((set, index) => ({
					...set,
					data: datas[index],
					borderRadius: 3,
				})),
			},
			options: {
				maintainAspectRatio: false,
				scales: {
					y: {
						min: 0,
						max: 20,
					},
				},
				plugins: {
					legend: {
						display: false,
					},
				},
			}
		});

		return () => {
			chart.current?.destroy();
		}
	}, []);

	useEffect(() => {
		if (chart.current) {
			chart.current.data.datasets.forEach((set, index) => (set.data = datas[index]));
			chart.current.update();
		}
	}, [datas]);

	useEffect(() => {
		if(chart.current && chart.current.data.labels) {
			chart.current.data.labels = labels;
		}
	}, [labels]);

	const witdh = 28 + datas[0].length * 74;

	return <div>
		<div className={`font-semibold text-xl`}>{title}</div>
		<div className={`flex items-center mb-2`}>
			{datasets.map((set, index) => (
				<div key={index} className={`flex items-center mr-4`}>
					<div className={'h-4 w-10 mr-1 rounded-sm'} style={{backgroundColor: set.backgroundColor?.toString()}}></div>
					<div>{set.label}</div>
				</div>
			))}
		</div>
		<div className={`h-64 overflow-x-scroll`}>
			<div className={`h-full min-w-full`} style={{ width: `${witdh}px` }}>
				<canvas ref={canvas}></canvas>
			</div>
		</div>
	</div>;
}
