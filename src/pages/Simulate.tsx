import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Input } from '../components/Input';
import { Wrapper } from '../components/misc/Wrapper';
import { leagues } from '../data/leagues';

type Params = {
	league: string;
	contest: string;
}

export const Simulate: React.FC = () => {
	const { league, contest } = useParams<Params>();

	const [values, setValues] = useState<Record<string, string | undefined>>({});

	const subjects = leagues[league].contests[contest].subjects;

	return <div className={`my-4`}>
		<Wrapper>
			<h3 className={`font-bold text-2xl mb-4`}>Notes</h3>
			<div className={`grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`}>
				{Object.keys(subjects).map(k => <Input key={k} subject={subjects[k]} value={values[k]} onChange={value => setValues({ ...values, [k]: value })} />)}
			</div>

			{/* <canvas ref="radarNotesCanvas"></canvas>
			<canvas ref="radarAdmittedCanvas"></canvas> */}
		</Wrapper>
	</div>;
};
