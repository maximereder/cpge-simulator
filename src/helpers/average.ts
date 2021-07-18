import { Bank } from "../types"
import { getKeys } from './object';

export const getAverage = (bank: Bank<string>, stats: Record<string, string | undefined>): number => {
	const subjects = getKeys(stats);

	const statsWithCoefs = subjects.map(subject => {
		return (Number(stats[subject]) || 0) * bank.factors[subject];
	});
	return statsWithCoefs.reduce((a, b) => (a + b), 0) / subjects.map(s => bank.factors[s]).reduce((a, b) => (a + b), 0);
}