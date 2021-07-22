import { League } from '../../types';
import { tsiLeague } from "./tsi";
import { mpLeague } from "./mp";
import { pcLeague } from "./pc";
import { psiLeague } from "./psi";
import { ptLeague } from './pt';

export const leagues: Record<string, League> = {
	tsi: tsiLeague,
	mp: mpLeague,
	pc: pcLeague,
	psi: psiLeague,
	pt: ptLeague
};
