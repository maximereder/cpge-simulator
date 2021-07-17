import { League } from '../../types';
import { tsiLeague } from "./tsi";
import { mpLeague } from "./mp";
import { pcLeague } from "./pc";

export const leagues: Record<string, League> = {
	tsi: tsiLeague,
	mp: mpLeague,
	pc: pcLeague
};
