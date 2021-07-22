import { Lottie } from '../components/misc/Lottie';
import React from 'react'
import { Wrapper } from '../components/misc/Wrapper';
import { leagues } from '../data/leagues';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { Emojis } from '../components/Emojis';

export const Home: React.FC = () => {
	const [selectedLeague, setSelectedLeague] = useLocalStorage<string>('league', '');
	const [selectedContest, setSelectedContest] = useLocalStorage<string>('contest', '');

	const setLeague = (league: string) => {
		setSelectedLeague(league);
		setSelectedContest('');
	}

	return <div>
		<Wrapper>
			<div className={`grid gap-16 grid-cols-1 md:grid-cols-2 items-start`}>
				<div className={`md:sticky md:top-0`}>
					<div className={`h-60 md:h-auto md:m-8`}>
						<Lottie url={'https://assets10.lottiefiles.com/packages/lf20_ybiszbil.json'} />
					</div>
					<h1 className={`font-bold text-3xl mb-2`}>Simule ton concours !</h1>
					<p>Tu es en classes préparatoires scientifiques et tu souhaites en savoir plus sur tes admissibilités ? Alors n'hésite plus !</p>
				</div>
				<div>
					<div className={`mt-8 mb-4`}>
						<div className={`font-bold text-2xl mb-4`}><span className={`inline-block w-6 text-green-600`}>1.</span>Choisis ta filière</div>
						<div className={`grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3`}>
							{Object.keys(leagues).map(k => (
								<div key={k} className={`group cursor-pointer ${k === selectedLeague ? 'bg-green-100' : 'bg-white'} p-8 shadow-md rounded-lg transition-all hover:shadow-xl`} onClick={() => setLeague(k)}>
									<Emojis emojis={leagues[k].emojis} />
									<div className={`mt-4 text-4xl font-bold text-center truncate`}>{leagues[k].title}</div>
								</div>
							))}
						</div>
					</div>

					{
						selectedLeague ? (
							<div className={`mt-8 mb-4`}>
								<div className={`font-bold text-2xl mb-4`}><span className={`inline-block w-6 text-green-600`}>2.</span>Choisis ton concours</div>
								<div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-1`}>
									{Object.keys(leagues[selectedLeague].contests).map(k => (
										<div key={k} className={`group cursor-pointer ${k === selectedContest ? 'bg-green-100' : 'bg-white'} p-8 text-center shadow-md rounded-lg transition-all hover:shadow-xl`} onClick={() => setSelectedContest(k)}>
											<div className={`mt-4 text-4xl font-bold truncate`}>{leagues[selectedLeague].contests[k].title}</div>
										</div>
									))}
								</div>
							</div>
						) : null
					}

					{
						selectedLeague && selectedContest ? (
							<div className={`mt-8 mb-4`}>
								<div className={`font-bold text-2xl mb-4`}><span className={`inline-block w-6 text-green-600`}>3.</span>Calcule ton admissibilité</div>
								<Link className={`inline-block w-full my-4 py-3 px-6 cursor-pointer bg-indigo-500 text-white text-lg text-center rounded-md shadow-md transition-all hover:shadow-lg hover:bg-indigo-600`} to={`/${selectedLeague}/${selectedContest}`}>C'est parti !</Link>
							</div>
						) : null
					}
				</div>
			</div>
		</Wrapper>
	</div>;
};
