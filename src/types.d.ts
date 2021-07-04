export type LeagueKey = 'tsi';

export type League<ContestKey extends string, C extends Contest<string, string>> = {
	title: string,
	contests: Record<ContestKey, C>,
}

export type Contest<BankKey extends string, Subject extends string> = {
	title: string,
	banks: Record<BankKey, Bank<Subject>>,
}

type Bank<Subject extends string> = {
	title: string,
	factors: Record<Subject, number>,
	schools: School[],
}

type School = {
	title: string,
}



