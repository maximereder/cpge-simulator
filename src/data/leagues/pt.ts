import { Contest, League } from "../../types";

const general: Contest<
"ma" | "mb" | "mc" | "pa" | "pb" | "infomod" | "fra" | "frb" | "lva" | "siia" | "siib"
> = {
  title: "Concours filière PT",
  subjects: {
    ma: { title: "Mathématiquess A" },
    mb: { title: "Mathématiquess B" },
		mc: { title: "Mathématiques C" },
		pa: { title: "Physique A"},
		pb: { title: "Physique B"},
		infomod: { title: "Informatique ou Modélisation"},
		fra: {title: "Français-Philosophie A"},
		frb: {title: "Français-Philosophie B"},
		lva: {title: "LVA"},
		siia: { title: "S2I A"},
		siib: { title: "S2I B"}
  },
  banks: {
    ccs: {
      title: "Centrale-Supélec",
      factors: {
				ma: 8,
				mb: 8,
				mc: 8,
				pa: 8,
				pb: 8,
				infomod: 10,
				fra: 0,
				frb: 17,
				lva: 11,
				siia: 16,
				siib: 6
      },
      threshold: 12,
      schools: [],
    },
		minespont: {
      title: "Mines-Ponts",
      factors: {
				ma: 0,
				mb: 3,
				mc: 4,
				pa: 4,
				pb: 3,
				infomod: 2,
				fra: 0,
				frb: 5,
				lva: 3,
				siia: 6,
				siib: 0
      },
      threshold: 484 / 39,
      schools: [],
    },
		ensam: {
      title: "Arts et Métiers",
      factors: {
				ma: 0,
				mb: 4,
				mc: 4,
				pa: 4,
				pb: 4,
				infomod: 4,
				fra: 5,
				frb: 5,
				lva: 0,
				siia: 5,
				siib: 6
      },
      threshold: 10.5,
      schools: [],
    },
		ccp: {
      title: "CCINP",
      factors: {
				ma: 0,
				mb: 8,
				mc: 7,
				pa: 8,
				pb: 6,
				infomod: 4,
				fra: 5,
				frb: 4,
				lva: 2,
				siia: 7,
				siib: 7
      },
      threshold: 861 / 100,
      schools: [],
    },
		enscp: {
      title: "ENS Cachan/Paris-Saclay",
      factors: {
				ma: 3,
				mb: 0,
				mc: 3,
				pa: 3,
				pb: 2,
				infomod: 2,
				fra: 0,
				frb: 4,
				lva: 1,
				siia: 4,
				siib: 6
      },
      threshold: 12.5,
      schools: [],
    },
		ensr: {
      title: "ENS Rennes",
      factors: {
				ma: 3,
				mb: 0,
				mc: 3,
				pa: 3,
				pb: 2,
				infomod: 2,
				fra: 0,
				frb: 4,
				lva: 1,
				siia: 4,
				siib: 6
      },
      threshold: 12.5,
      schools: [],
    },
		polytechnique: {
      title: "Polytechnique",
      factors: {
				ma: 6,
				mb: 0,
				mc: 6,
				pa: 6,
				pb: 0,
				infomod: 4,
				fra: 4,
				frb: 0,
				lva: 6,
				siia: 0,
				siib: 10
      },
      threshold: 17,
      schools: [],
    },
		polytech: {
      title: "Groupe Polytech",
      factors: {
				ma: 0,
				mb: 0,
				mc: 3,
				pa: 3,
				pb: 0,
				infomod: 2,
				fra: 0,
				frb: 2,
				lva: 2,
				siia: 0,
				siib: 4
      },
      threshold: 10,
      schools: [],
    },
		minestelecom: {
      title: "Mines-Télécom",
      factors: {
				ma: 0,
				mb: 3,
				mc: 4,
				pa: 4,
				pb: 3,
				infomod: 2,
				fra: 0,
				frb: 5,
				lva: 3,
				siia: 6,
				siib: 0
      },
      threshold: 11.77,
      schools: [],
    },
		fesic: {
      title: "FESIC Prépa",
      factors: {
				ma: 3,
				mb: 0,
				mc: 2,
				pa: 3,
				pb: 0,
				infomod: 3,
				fra: 0,
				frb: 3,
				lva: 2,
				siia: 4,
				siib: 0
      },
      threshold: 9,
      schools: [],
    },
  },
};


export const ptLeague: League = {
  title: "PT",
  contests: {
		general
  },
  emojis: ['ruler', 'book'],
};
