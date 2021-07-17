import React from 'react';

export const Wrapper: React.FC = ({
	children
}) => {
	return <div className={`max-w-5xl px-4 mx-auto`}>
		{children}
	</div>
}
