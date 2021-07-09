import { Bank, Stats } from "../types"
import { getKeys } from './object';

export const getAverage = <S extends string>(bank: Bank<S>, stats: Stats<S>): number => {
	const subjects = getKeys(stats);

	const statsWithCoefs = subjects.map(subject => {
		return stats[subject] * bank.factors[subject];
	});
	return statsWithCoefs.reduce((a, b) => (a + b), 0) / subjects.map(s => bank.factors[s]).reduce((a, b) => (a + b), 0);
}