import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export type LottieProps = {
	url: string;
};

export const Lottie: React.FC<LottieProps> = ({
	url
}) => {
	const container = useRef<HTMLDivElement>(null!);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((r) => r.json())
			.then(animData => {
				const anim = lottie.loadAnimation({
					container: container.current,
					animationData: animData,
				});

				setLoaded(true);

				return () => anim.destroy();
			})
			.catch(err => { });
	}, [url]);

	return <div className={`${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 h-full`} ref={container}></div>;
};
