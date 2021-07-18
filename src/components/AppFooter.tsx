import React from 'react';
import { Wrapper } from './misc/Wrapper';

export const AppFooter: React.FC = () => {
	return <div className="bg-gray-100">
		<Wrapper>
			<div className={`py-4 text-center text-sm`}>
				<span>© 2021 | <a href="https://github.com/maxou54200/" target="_blank">Maxime REDER</a> | <a href="https://github.com/alexandretrichot/" target="_blank">Alexandre TRICHOT</a></span>
			</div>
		</Wrapper>
	</div>;
}
