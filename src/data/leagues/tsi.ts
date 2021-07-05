import { Contest } from "../../types";

type CentralBankKey = 'default' | 'estp';
type CentralSubject = 'm1' | 'fr';

const central: Contest<CentralBankKey, CentralSubject> = {
	title: 'Centrale',
	banks: {
		default: {
			title: 'Default Centrale Bank',
			factors: {
				m1: 3,
				fr: 5,
			},
			schools: [
				{ title: 'École 1' },
				{ title: 'École 2' },
				{ title: 'École 3' }
			],
		},
		estp: {
			title: "ESTP",
			factors: {
				m1: 10,
				fr: 11
			},
			schools: [
				{
					title: "Télecom nancy"
				},
				{
					title: "Mine Saint-Étienne"
				}
			]
		}
	}
}

const ccp: Contest<'default' | 'other', 'm2' | 'fr'> = {
	title: 'Centrale',
	banks: {
		default: {
			title: 'Centrale',
			factors: {
				m2: 3,
				fr: 5,
			},
			schools: [
				{ title: 'École 1' },
				{ title: 'École 2' },
				{ title: 'École 3' }
			],
		},
		other: {
			title: 'CCP Factors',
			factors: {
				fr: 3,
				m2: 7,
			},
			schools: [
				{ title: 'Other school' },
			]
		}
	}
}

export const tsiLeague = {
	title: 'TSI',
	contests: {
		central,
		ccp
	}
}

tsiLeague.contests.ccp.banks.other.title