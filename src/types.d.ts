export type League = {
	title: string,
	contests: Record<string, Contest<string>>,
}

export type Contest<Subject extends string> = {
	title: string,
	banks: Record<string, Bank<Subject>>,
}

type Bank<Subject extends string> = {
	title: string,
	factors: Record<Subject, number>,
	threshold: number,
	schools: School[],
}

type School = {
	title: string,
}

type Stats<Subject extends string> = Record<Subject, number>;
