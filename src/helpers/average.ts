import { tsiLeague } from "../data/leagues/tsi";
import { Bank, Contest, Stats } from "../types"

export function getAverage<S extends string>(bank: Bank<S>, stats: Stats<S>): number {
	const subjects = Object.keys(stats) as S[];

	const statsWithCoefs = subjects.map(subject => {
		return stats[subject] * bank.factors[subject];
	});
	return statsWithCoefs.reduce((a, b) => (a + b), 0) / subjects.length;
}

