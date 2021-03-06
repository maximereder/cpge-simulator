import { Contest, League } from "../../types";
import { Source } from "../../helpers/source";

const polytechnique: Contest<
"m1" | "m2" | "p" | "psii" | "fr" | "lv1"
> = {
  title: "Polytechnique",
  subjects: {
    m1: { title: "Mathématiques 1" },
    m2: { title: "Mathématiques 2" },
		p: { title : "Physique"},
		psii: { title: "Physique ou S2I"},
		fr: {title: "Français-Philosophie"},
		lv1: {title: "LV1"},
  },
  banks: {
    default: {
      title: "Par défaut",
      factors: {
				m1: 8,
				m2: 6,
				psii: 6,
				p: 7,
				fr: 6,
				lv1: 6
      },
      threshold: 500/39,
      source: Source.OFFICIAL,
      schools: [],
    },
  },
};

const centrale: Contest<
  "m1" | "m2" | "p1" | "p2" | "sinfo" | "lv1" | "fr"
> = {
  title: "CCS",
  subjects: {
    m1: { title: "Mathématiques 1" },
    m2: { title: "Mathématiques 2" },
		p1: { title: "Physique-Chimie 1"},
		p2: { title: "Physique-Chimie 2"},
		sinfo: { title: "S2I ou Informatique"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"},
  },
  banks: {
    cc: {
      title: "Centrale Casablanca",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1200 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		cl: {
      title: "Centrale Lille",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1195 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		clyon: {
      title: "Centrale Lyon",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1301 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		cm: {
      title: "Centrale Marseille",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1131 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		cn: {
      title: "Centrale Nantes",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1307 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		centralesupelec: {
      title: "Centrale-Supélec",
      factors: {
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 1345 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		ensam: {
      title: "ENSAM",
      factors: {
        m1: 12,
        m2: 12,
        p1: 15,
				p2: 15,
				sinfo: 12,
        lv1: 11,
        fr: 17
      },
      threshold: 987 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
    ecolenavale: {
      title: "École navale",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 980 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		ensea: {
      title: "ENSEA",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 800 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		epf: {
      title: "EPF",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 596 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		estp: {
      title: "ESTP",
      factors: {
        m1: 11,
        m2: 11,
        p1: 12,
				p2: 12,
				sinfo: 16,
        lv1: 12,
        fr: 20
      },
      threshold: 681 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
    iogs: {
      title: "Institut d'Optique Graduate School",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1173 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		utt: {
      title: "UTT",
      factors: {
        m1: 17,
        m2: 17,
        p1: 11,
				p2: 11,
				sinfo: 10,
        lv1: 11,
        fr: 17
      },
      threshold: 1000 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
  },
  
};

/*
const ecolenavale: Contest<
  "m1" | "m2" | "p1" | "p2" | "sinfo" | "lv1" | "fr"
> = {
  title: "École Navale",
  subjects: {
    m1: { title: "Mathématiques 1" },
    m2: { title: "Mathématiques 2" },
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
        m1: 13,
        m2: 13,
        p1: 15,
				p2: 15,
				sinfo: 11,
        lv1: 10,
        fr: 18
      },
      threshold: 980/95,
      schools: [],
    },
  },
};
*/
const minesponts: Contest<
  "m1" | "m2" | "p1" | "p2" | "chimie" | "sinfo" | "lv1" | "info" | "fr"
> = {
  title: "Mines-Ponts",
  subjects: {
    m1: { title: "Mathématiques 1" },
    m2: { title: "Mathématiques 2" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
		chimie: { title: "Chimie"},
		sinfo: { title: "S2I"},
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
				p2: 4,
				chimie: 2,
				sinfo: 4,
				fr: 5,
        lv1: 3,
				info: 1
      },
      threshold: 484 / 39,
      source: Source.OFFICIAL,
      schools: [],
    },
  },
};

const minestelecom: Contest<
  "m1" | "m2" | "p1" | "p2" | "chimie" | "sii" | "lv1" | "info" | "fr"
> = {
  title: "Mines-Télécom",
  subjects: {
    m1: { title: "Mathématiques 1" },
    m2: { title: "Mathématiques 2" },
		p1: { title: "Physique 1"},
		p2: { title: "Physique 2"},
		chimie: { title: "Chimie"},
    sii: { title: "Sciences Industrielles"},
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
				p2: 4,
				chimie: 2,
        sii: 4,
				fr: 5,
        lv1: 3,
				info: 2
      },
      threshold: 376 / 30,
      source: Source.OFFICIAL,
      schools: [],
    },
  },
};

const ccp: Contest<
  "m" | "p" | "mspc" | "info" | "sii" | "fr" | "lv1" 
> = {
  title: "CCP",
  subjects: {
    m: { title: "Mathématiques 1" },
		p: { title: "Physique-Chimie"},
		mspc: { title: "Modélisation et Ingénieurie Numérique"},
    info: { title: "Informatique"},
		sii: { title: "S2I"},
		fr: { title: "Français-Philosophie"},
		lv1: { title: "LV1"}
  },
  banks: {
    eeigm: {
      title: "EEIGM",
      factors: {
        m: 11,
        p: 11,
				mspc: 9,
				info: 5,
				sii: 9,
				fr: 0,
        lv1: 4,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
    grenobleinp: {
      title: "Grenoble INP",
      factors: {
        m: 11,
        p: 11,
				mspc: 9,
				info: 5,
				sii: 9,
				fr: 7,
        lv1: 4,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
    ensgsi: {
      title: "ENSGSI",
      factors: {
        m: 11,
        p: 11,
				mspc: 9,
				info: 5,
				sii: 9,
				fr: 9,
        lv1: 4,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
    ensisa: {
      title: "ENSISA",
      factors: {
        m: 11,
        p: 11,
				mspc: 9,
				info: 5,
				sii: 9,
				fr: 9,
        lv1: 4,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		enstib: {
      title: "ENSTIB",
      factors: {
        m: 2,
        p: 2,
				mspc: 2,
				info: 2,
				sii: 2,
				fr: 2,
        lv1: 2,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		eost: {
      title: "EOST",
      factors: {
        m: 14,
        p: 14,
				mspc: 7,
				info: 4,
				sii: 6,
				fr: 9,
        lv1: 4,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		ecoledelair: {
      title: "École de l'Air",
      factors: {
        m: 14,
        p: 14,
				mspc: 7,
				info: 4,
				sii: 6,
				fr: 9,
        lv1: 4,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
		stcyr: {
      title: "Saint Cyr",
      factors: {
        m: 8,
        p: 9,
				mspc: 6,
				info: 5,
				sii: 4,
				fr: 8,
        lv1: 6,
      },
      threshold: 861 / 100,
      source: Source.OFFICIAL,
      schools: [],
    },
  },
};

const eaaa: Contest<
"m1" | "m2" | "p" | "sinfo" | "fr" | "lv1" | "qcm"
> = {
  title: "E3A",
  subjects: {
    m1: { title: "Mathématiques 1" },
    m2: { title: "Mathématiques 2" },
		p: { title : "Physique"},
		sinfo: { title: "S2I ou Informatique"},
		fr: {title: "Français-Philosophie"},
		lv1: {title: "LV1"},
		qcm: { title: "QCM Anglais"}
  },
  banks: {
		polytech: {
      title: "Polytech",
      factors: {
				m1: 3,
				m2: 0,
				sinfo: 2,
				p: 2,
				fr: 3,
				lv1: 2,
				qcm: 2
      },
      threshold: 500/45,
      source: Source.OFFICIAL,
      schools: [],
    },
  },
};

export const psiLeague: League = {
  title: "PSI",
  contests: {
    polytechnique,
    centrale,
    minesponts,
    minestelecom,
    ccp,
		eaaa
  },
  emojis: ['apple', 'gear'],
};
