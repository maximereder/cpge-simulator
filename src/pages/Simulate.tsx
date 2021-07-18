import React from 'react';
import { useParams } from 'react-router';
import { Input } from '../components/Input';
import { Wrapper } from '../components/misc/Wrapper';
import { ResultGraphs } from '../components/ResultGraphs';
import { ResultTable } from '../components/ResultTable';
import { leagues } from '../data/leagues';
import { getAverage } from '../helpers/average';
import useLocalStorage from '../hooks/useLocalStorage';

type Params = {
	league: string;
	contest: string;
}

export const Simulate: React.FC = () => {
	const { league: leagueId, contest: contestId } = useParams<Params>();

	const [values, setValues] = useLocalStorage<Record<string, string | undefined>>(`${leagueId}:${contestId}`, {});

	const contest = leagues[leagueId].contests[contestId];

	const items = Object.fromEntries(
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

	const subjects = contest.subjects;

	return <div className={`my-4`}>
		<Wrapper>
			<h3 className={`font-bold text-2xl mb-4`}>Notes</h3>
			<div className={`grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`}>
				{Object.keys(subjects).map(k => <Input key={k} subject={subjects[k]} value={values[k]} onChange={value => setValues({ ...values, [k]: value })} />)}
			</div>

			<h2 className={`mt-16 font-bold text-2xl`}>Les résultats</h2>
			<div className={`my-4`}>
				<ResultTable items={Object.values(items)} />
			</div>

			<ResultGraphs subjects={subjects} values={values} items={items} />
		</Wrapper>
	</div>;
};
