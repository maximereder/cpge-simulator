import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Inputs } from '../components/Inputs';
import { Wrapper } from '../components/misc/Wrapper';
import { leagues } from '../data/leagues';

type Params = {
	league: string;
	contest: string;
}

export const Simulate: React.FC = () => {
	const { league, contest } = useParams<Params>();

	const [values, setValues] = useState<Record<string, string | undefined>>({});

	const subjects = Object.keys(Object.values(leagues[league].contests[contest].banks)[0].factors);

	return <div>
		<Wrapper>
			<Inputs subjects={subjects} values={values} onValuesChange={setValues} />

			{/* <canvas ref="radarNotesCanvas"></canvas>
			<canvas ref="radarAdmittedCanvas"></canvas> */}
		</Wrapper>
	</div>;
};
