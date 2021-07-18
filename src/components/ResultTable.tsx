import React from 'react'

type Item = {
	name: string;
	note: number;
	threshold: number;
	delta: number;
	admitted: boolean;
};

export type ResultTableProps = {
	items: Item[];
}

export const ResultTable: React.FC<ResultTableProps> = ({
	items,
}) => {
	const titles = ['Banque', 'Note', 'Seuil', 'Différence', 'Admissible'];

	return <div className={`w-full overflow-x-scroll shadow border-b border-gray-200 rounded-lg`}>
		<table className="w-full divide-y divide-gray-200">
			<thead className="bg-gray-50">
				<tr>
					{titles.map((title, index) => (
						<th
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							key={index}
							scope="col"
						>
							{title}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200">
				{items.map((item, index) => (
					<tr key={index}>
						<td className="px-6 py-4 whitespace-nowrap text-sm font-bold">{item.name}</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm">{formatNumber(item.note)}</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm">{formatNumber(item.threshold)}</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm">{formatNumber(item.delta)}</td>
						<td className="px-6 py-4 whitespace-nowrap text-sm">{item.admitted ? 'Oui' : 'Non'}</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>;
}

const formatNumber = (value: number) => {
	return (value || 0).toLocaleString('fr', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}