import { League } from '../../types';
import { tsiLeague } from "./tsi";

export const leagues: Record<string, League> = {
	tsi: tsiLeague,
};
