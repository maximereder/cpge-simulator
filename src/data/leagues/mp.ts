import { Contest, League } from "../../types";

const polytechnique: Contest<
"m1" | "m2" | "p" | "info" | "psii" | "fr" | "lv1"
> = {
  title: "Polytechnique",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p: { title : "Physique"},
		info: { title: "Informatique"},
		psii: { title: "Physique - S2I"},
		fr: {title: "Français-Philosophie"},
		lv1: {title: "LV1"},
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
				m1: 8,
				m2: 7,
				info: 6,
				psii: 6,
				p: 6,
				fr: 6,
				lv1: 6
      },
      threshold: 500/45,
      schools: [],
    },
  },
};

const centrale: Contest<
  "m1" | "m2" | "p1" | "p2" | "sinfo" | "lv1" | "fr"
> = {
  title: "CCS",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique-Chimie 1"},
		p2: { title: "Physique-Chimie 2"},
		sinfo: { title: "S2I ou Informatique"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"},
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1130 / 100,
      schools: [],
    },
		cc: {
      title: "Centrale Casablanca",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1110 / 100,
      schools: [],
    },
		cl: {
      title: "Centrale Lille",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1160 / 100,
      schools: [],
    },
		clyon: {
      title: "Centrale Lyon",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1200 / 100,
      schools: [],
    },
		cm: {
      title: "Centrale Marseille",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1081 / 100,
      schools: [],
    },
		cn: {
      title: "Centrale Nantes",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1212 / 100,
      schools: [],
    },
		centralesupelec: {
      title: "Centrale-Supélec",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1267 / 100,
      schools: [],
    },
		ensam: {
      title: "ENSAM",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 6,
        lv1: 11,
        fr: 17
      },
      threshold: 1157 / 100,
      schools: [],
    },
		estp: {
      title: "ESTP",
      factors: {
        m1: 16,
        m2: 16,
        p1: 11,
				p2: 11,
				sinfo: 8,
        lv1: 12,
        fr: 20
      },
      threshold: 645 / 100,
      schools: [],
    },
  },
};

const ecolenavale: Contest<
  "m1" | "m2" | "p1" | "p2" | "sinfo" | "lv1" | "fr"
> = {
  title: "CCS",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique-Chimie 1"},
		p2: { title: "Physique-Chimie 2"},
		sinfo: { title: "S2I ou Informatique"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"},
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 15,
        m2: 15,
        p1: 13,
				p2: 13,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 769/95,
      schools: [],
    },
  },
};

const minesponts: Contest<
  "m1" | "m2" | "p1" | "p2" | "chimie" | "sinfo" | "lv1" | "info" | "fr"
> = {
  title: "Mines-Ponts",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
		chimie: { title: "Chimie"},
		sinfo: { title: "S2I ou Informatique"},
		fr: { title: "Français-Philosophie"},
		info: { title: "Informatique"},
		lv1: { title: "LV1"}
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 4,
        m2: 5,
        p1: 3,
				p2: 4,
				chimie: 2,
				sinfo: 2,
				fr: 5,
        lv1: 3,
				info: 1
      },
      threshold: 1426 / 100,
      schools: [],
    },
  },
};

const ccp: Contest<
  "m1" | "m2" | "p1" | "p2" | "sinfo" | "lv1" | "fr"
> = {
  title: "CCP",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique "},
		p2: { title: "Physique-Chimie "},
		sinfo: { title: "S2I ou Informatique"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"}
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensai: {
      title: "ENSAI",
      factors: {
        m1: 8,
        m2: 8,
        p1: 0,
				p2: 0,
				sinfo: 2,
				fr: 6,
        lv1: 2,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensi: {
      title: "ENSI",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensci: {
      title: "ENSCI",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		grenobleinp: {
      title: "Grenoble INP",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensgsi: {
      title: "ENSCI",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensisa: {
      title: "ENSISA",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		enstib: {
      title: "ENSTIB",
      factors: {
        m1: 2,
        m2: 2,
        p1: 2,
				p2: 2,
				sinfo: 2,
				fr: 2,
        lv1: 2,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		eost: {
      title: "EOST",
      factors: {
        m1: 12,
        m2: 12,
        p1: 7,
				p2: 7,
				sinfo: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ecoledelair: {
      title: "École de l'Air",
      factors: {
        m1: 11,
        m2: 11,
        p1: 8,
				p2: 8,
				sinfo: 4,
				fr: 10,
        lv1: 8,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		stcyr: {
      title: "Saint Cyr",
      factors: {
        m1: 8,
        m2: 8,
        p1: 6,
				p2: 6,
				sinfo: 4,
				fr: 8,
        lv1: 6,
      },
      threshold: 1426 / 100,
      schools: [],
    },
  },
};

const eaaa: Contest<
"m1" | "m2" | "p" | "sinfo" | "fr" | "lv1" | "qcm"
> = {
  title: "Polytechnique",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p: { title : "Physique-Chimie"},
		sinfo: { title: "S2I ou Informatique"},
		fr: {title: "Français-Philosophie"},
		lv1: {title: "LV1"},
		qcm: { title: "QCM Anglais"}
  },
  banks: {
		polytech: {
      title: "Polytech",
      factors: {
				m1: 4,
				m2: 0,
				sinfo: 4,
				p: 2,
				fr: 2,
				lv1: 2,
				qcm: 2
      },
      threshold: 500/45,
      schools: [],
    },
  },
};

export const mpLeague: League = {
  title: "MP",
  contests: {
    polytechnique,
    centrale,
		ecolenavale,
		minesponts,
		ccp,
		eaaa
  },
  emojis: ['ruler', 'apple'],
};
