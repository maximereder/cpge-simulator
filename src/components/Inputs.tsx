import React from 'react'

export type InputsProps = {
	subjects: string[];
	values: Record<string, string>;
	onValuesChange: (values: Record<string, string>) => void;
}

export const Inputs: React.FC<InputsProps> = ({
	subjects,
	values,
	onValuesChange
}) => {
	return <div className={``}>
		{
			subjects.map(s => (
				<input
					className={`bg-red-200`}
					key={s}
					type="number"
					min={0}
					max={20}
					step={.5}
					inputMode={'decimal'}
					value={values[s]}
					onChange={ev => onValuesChange({ ...values, [s]: ev.currentTarget.value })}
				/>
			))
		}
	</div>;
}
