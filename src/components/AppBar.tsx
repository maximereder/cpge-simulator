import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './misc/Wrapper';

import { ReactComponent as GithubIcon } from '../style/icons/github-brands.svg';

export const AppBar: React.FC = () => {
	return <div className={`sticky top-0 bg-white bg-opacity-60 backdrop-blur-sm shadow-sm z-20`}>
		<Wrapper>
			<div className={`flex justify-between items-center`}>
				<Link className={`block py-4`} to="/"><h1 className={`font-bold`}>SimuleTonConcours.fr</h1></Link>
				<nav>
					<a className={`block py-4`} href="https://github.com/maxou54200/cpge-simulator" target="_blank"><GithubIcon className={`h-6`} /></a>
				</nav>
			</div>
		</Wrapper>
	</div>;
}
