import { Bank } from "../types"
import { thresholdNote } from './note';

export const getAverage = (bank: Bank<string>, stats: Record<string, string | undefined>): number => {
	const subjects = Object.keys(bank.factors);

	const statsWithCoefs = subjects.map(subject => {
		return thresholdNote(stats[subject]) * bank.factors[subject];
	});
	return statsWithCoefs.reduce((a, b) => (a + b), 0) / subjects.map(s => bank.factors[s]).reduce((a, b) => (a + b), 0);
}
