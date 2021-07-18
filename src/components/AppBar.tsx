import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './misc/Wrapper';

export const AppBar: React.FC = () => {
	return <div className={`bg-green-100`}>
		<Wrapper>
			<div className={`flex justify-between items-center`}>
				<Link className={`block p-4`} to="/"><h1 className={`font-bold`}>SimuleTonConcours.fr</h1></Link>
				<nav className={``}>
					<Link className={`block p-4`} to="/">Accueil</Link>
				</nav>
			</div>
		</Wrapper>
	</div>;
}
