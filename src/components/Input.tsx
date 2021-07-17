import React from 'react'
import { Subject } from '../types';

export type InputProps = {
	subject: Subject,
	value?: string;
	onChange?: (value?: string) => void;
}

export const Input: React.FC<InputProps> = ({
	subject,
	value = '',
	onChange,
}) => {
	const onBlur = () => {
		if(onChange) {
			if(Number(value) < 0) {
				onChange('0');
			}else if(Number(value) > 20) {
				onChange('20');
			}
		}
	}

	return <label className={`block`}>
		<div className={`font-semibold`}>{subject.title}</div>
		<input
			className={`block mt-2 w-full bg-gray-50 border-2 border-gray-200 text-xl font-bold p-2 rounded-lg hover:border-green-100 focus:hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
			type="number"
			min={0}
			max={20}
			step={.5}
			inputMode={'decimal'}
			value={value}
			onChange={ev => onChange && onChange(ev.currentTarget.value)}
			onBlur={onBlur}
			placeholder={'0'}
		/>
	</label>;
}
