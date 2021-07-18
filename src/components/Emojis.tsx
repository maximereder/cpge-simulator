import React from 'react';

import bookEmoji from '../style/emojis/book.png';
import gearEmoji from '../style/emojis/gear.png';
import rulerEmoji from '../style/emojis/ruler.png';
import alembicEmoji from '../style/emojis/alembic.png';
import appleEmoji from '../style/emojis/apple.png';

export type EmojisProps = {
	emojis: string[];
}

export const Emojis: React.FC<EmojisProps> = ({
	emojis
}) => {
	const transformedEmojis = emojis.map(emoji => ({emoji, src: getEmoji(emoji)}));

	return <div className={`flex justify-center items-center`}>
		{transformedEmojis.map(({emoji, src}) => (
			<img className={`h-10`} key={emoji} src={src} alt={emoji}/>
		))}
	</div>;
}

const getEmoji = (emoji: string): string => {
	if(!Object.keys(emojiLib).includes(emoji)) throw new Error(`The used emoji '${emoji}' is not added in emojiLib.`);
	return emojiLib[emoji as keyof typeof emojiLib];
}

const emojiLib = {
	'book': bookEmoji,
	'gear': gearEmoji,
	'ruler': rulerEmoji,
	'alembic': alembicEmoji,
	'apple': appleEmoji,
};
