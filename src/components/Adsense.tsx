import React from 'react';

export type AdSenseProps = {
	client?: string;
	slot: string;
	format?: 'auto';
}

export const Adsense: React.FC<AdSenseProps> = ({
	client = 'ca-pub-2871821232807442',
	slot,
	format = 'auto',
}) => {
	return <>
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2871821232807442" crossOrigin="anonymous"></script>
		<ins className="block max-h-64 md:max-h-80 mt-4 text-center adsbygoogle"
			data-ad-client={client}
			data-ad-slot={slot}
			data-ad-format={format}
			data-full-width-responsive="true"></ins>
		<script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({ });` }} />
	</>
}
