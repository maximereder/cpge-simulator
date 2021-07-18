import { League } from '../../types';
import { tsiLeague } from "./tsi";
import { mpLeague } from "./mp";
import { pcLeague } from "./pc";
import { psiLeague } from "./psi";

export const leagues: Record<string, League> = {
	tsi: tsiLeague,
	mp: mpLeague,
	pc: pcLeague,
	psi: psiLeague,
};
