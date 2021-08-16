import React from 'react';
import { Subject } from '../types';
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title, Legend } from 'chart.js';
import { Graph } from './Graph';
import { thresholdNote } from '../helpers/note';

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title, Legend);

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
	const normalizedValues = Object.keys(subjects).map(k => thresholdNote(values[k]));

	return <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 mt-8`}>
		<Graph
			title={'Notes'}
			labels={Object.values(subjects).map(s => s.title)}
			datasets={[
				{
					label: 'Notes',
					backgroundColor: 'rgb(52, 211, 153)',
				}
			]}
			datas={[normalizedValues]}
		/>
		<Graph
			title={'Admissibilités'}
			labels={Object.values(items).map((i) => i.name)}
			datasets={[
				{
					label: 'Notes',
					backgroundColor: 'rgb(52, 211, 153)',
				},
				{
					label: "Barres d'admissibilité",
					backgroundColor: 'rgb(251, 191, 36)',
				}
			]}
			datas={[
				Object.values(items).map((i) => i.note),
				Object.values(items).map((i) => i.threshold),
			]}
		/>
	</div>;
};
