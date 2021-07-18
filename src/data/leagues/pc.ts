import { Contest, League } from "../../types";

const polytechnique: Contest<
  "m1" | "p1" | "p2" | "chimie" | "lv1" | "fr"
> = {
  title: "Polytechnique",
  subjects: {
    m1: { title: "Mathématique 1" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
    chimie: { title: "Chimie"},
		lv1: { title: "LV1"},
		fr: { title: "Français-Philosophie"}
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 9,
        p1: 6,
        p2: 6,
        chimie: 6,
        lv1: 11,
        fr: 17,
      },
      threshold: 1426 / 100,
      schools: [],
    },
  },
};

const centrale: Contest<
  "m1" | "m2" | "p1" | "p2" | "sinfo" | "chimie" | "lv1" | "fr"
> = {
  title: "CCS",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
    chimie: { title: "Chimie"},
		sinfo: { title: "S2I ou Informatique"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"},
  },
  banks: {
    default: {
      title: "Centrale-Supélec",
      factors: {
        m1: 12,
        m2: 13,
        p1: 15,
				p2: 15,
        chimie: 12,
        sinfo: 12,
        lv1: 11,
        fr: 17,
      },
      threshold: 1426 / 100,
      schools: [],
    },
  },
};

const ecolenavale: Contest<
  "m1" | "m2" | "p1" | "p2" | "chimie" | "lv1" | "fr"
> = {
  title: "CCS",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
    chimie: { title: "Chimie"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"},
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 844/95,
      schools: [],
    },
    cc: {
      title: "Centrale Casablanca",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1110 / 100,
      schools: [],
    },
		cl: {
      title: "Centrale Lille",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1160 / 100,
      schools: [],
    },
		clyon: {
      title: "Centrale Lyon",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1200 / 100,
      schools: [],
    },
		cm: {
      title: "Centrale Marseille",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1081 / 100,
      schools: [],
    },
		cn: {
      title: "Centrale Nantes",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1212 / 100,
      schools: [],
    },
		centralesupelec: {
      title: "Centrale-Supélec",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				chimie: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1267 / 100,
      schools: [],
    },
    ensam: {
      title: "ENSAM",
      factors: {
        m1: 12,
        m2: 12,
        p1: 15,
				p2: 15,
				chimie: 12,
        lv1: 11,
        fr: 17
      },
      threshold: 1290 / 100,
      schools: [],
    },
		estp: {
      title: "ESTP",
      factors: {
        m1: 16,
        m2: 16,
        p1: 11,
				p2: 11,
				chimie: 8,
        lv1: 12,
        fr: 20
      },
      threshold: 720 / 100,
      schools: [],
    },
  },
};

const minesponts: Contest<
  "m1" | "m2" | "p1" | "p2" | "chimie" |  "lv1" | "info" | "fr"
> = {
  title: "Mines-Ponts",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
		chimie: { title: "Chimie"},
		fr: { title: "Français-Philosophie"},
		info: { title: "Informatique"},
		lv1: { title: "LV1"}
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m1: 4,
        m2: 3,
        p1: 3,
				p2: 5,
				chimie: 4,
				fr: 5,
        lv1: 3,
				info: 1
      },
      threshold: 1426 / 100,
      schools: [],
    },
  },
};

const eaaa: Contest<
"m1" | "m2" | "p" | "sinfo" | "fr" | "lv1" | "qcm"
> = {
  title: "E3A",
  subjects: {
    m1: { title: "Mathématique 1" },
    m2: { title: "Mathématique 2" },
		p: { title : "Physique-Modélisation"},
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
				sinfo: 3,
				p: 3,
				fr: 2,
				lv1: 2,
				qcm: 2
      },
      threshold: 500/45,
      schools: [],
    },
  },
};

const ccp: Contest<
  "m" | "p" | "mspc" | "chimie" | "fr" | "lv1" 
> = {
  title: "CCP",
  subjects: {
    m: { title: "Mathématique 1" },
		p: { title: "Physique "},
		mspc: { title: "Modélisation des Systèmes Physiques et Chimiques"},
    chimie: { title: "Chimie"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"}
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
        m: 14,
        p: 15,
				mspc: 8,
				chimie: 8,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
    eeigm: {
      title: "EEIGM",
      factors: {
        m: 14,
        p: 15,
				mspc: 8,
				chimie: 15,
				fr: 0,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		grenobleinp: {
      title: "Grenoble INP",
      factors: {
        m: 14,
        p: 15,
				mspc: 8,
				chimie: 8,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensgsi: {
      title: "ENSGSI",
      factors: {
        m: 14,
        p: 15,
				mspc: 8,
				chimie: 8,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ensisa: {
      title: "ENSISA",
      factors: {
        m: 14,
        p: 15,
				mspc: 8,
				chimie: 8,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		enstib: {
      title: "ENSTIB",
      factors: {
        m: 3,
        p: 3,
				mspc: 2,
				chimie: 2,
				fr: 2,
        lv1: 2,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		eost: {
      title: "EOST",
      factors: {
        m: 14,
        p: 16,
				mspc: 8,
				chimie: 7,
				fr: 9,
        lv1: 4,
      },
      threshold: 1426 / 100,
      schools: [],
    },
		ecoledelair: {
      title: "École de l'Air",
      factors: {
        m: 13,
        p: 13,
				mspc: 8,
				chimie: 8,
				fr: 10,
        lv1: 8,
      },
      threshold: 1426 / 100,
      schools: [],
    },
  },
};

export const pcLeague: League = {
  title: "PC",
  contests: {
    polytechnique,
    centrale,
    ecolenavale,
    eaaa
  },
  emojis: ['apple', 'alembic'],
};
