import { Contest } from "../../types";

const central: Contest<'m1' | 'm2' | 'p1' | 'p2' | 'sii' | 'info' | 'lv1' | 'fr'> = {
	title: 'Centrale',
	banks: {
		default: {
			title: 'Default Centrale Bank',
			factors: {
				m1: 12,
				m2: 12,
				p1: 11,
				p2: 11,
				sii: 20,
				info: 6,
				lv1: 11,
				fr: 17,
			},
			threshold: 1426 / 100,
			schools: [],
		},
		estp: {
			title: "ESTP",
			factors: {
				m1: 11,
				m2: 11,
				p1: 12,
				p2: 12,
				sii: 16,
				lv1: 12,
				fr: 20,
				info: 6,
			},
			threshold: 721 / 45,
			schools: [
				{
					title: "Télecom nancy"
				},
				{
					title: "Mine Saint-Étienne"
				}
			]
		},
		arts: {
			title: 'ARTS',
			factors: {
				m1: 11,
				m2: 11,
				p1: 11,
				p2: 11,
				sii: 25,
				lv1: 13,
				fr: 13,
				info: 5,
			},
			threshold: 1116 / 100,
			schools: [],
		},
		esix: {
			title: 'ESIX',
			factors: {
				m1: 5,
				m2: 5,
				p1: 5,
				p2: 5,
				sii: 10,
				lv1: 5,
				fr: 5,
				info: 5,
			},
			threshold: 1411 / 100,
			schools: [],
		},
		ismans: {
			title: 'ISMANS',
			factors: {
				m1: 15,
				m2: 10,
				p1: 10,
				p2: 15,
				sii: 15,
				lv1: 10,
				fr: 10,
				info: 15,
			},
			threshold: 1264 / 100,
			schools: [],
		},
		mineTelecom: {
			title: 'Mine Telecom',
			factors: {
				m1: 5,
				m2: 3,
				p1: 3,
				p2: 3,
				sii: 6,
				lv1: 3,
				fr: 5,
				info: 2,
			},
			threshold: 319 / 30,
			schools: [],
		}
	},
}

const ccp: Contest<'m2' | 'fr'> = {
	title: 'Centrale',
	banks: {
		default: {
			title: 'Centrale',
			factors: {
				m2: 3,
				fr: 5,
			},
			threshold: 4,
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
			threshold: 4,
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
