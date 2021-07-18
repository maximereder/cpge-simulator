export type Subject = {
	title: string
}

export type League = {
	title: string,
	contests: Record<string, Contest<string>>,
	emojis: string[],
}

export type Contest<S extends string> = {
	title: string,
	banks: Record<string, Bank<S>>,
	subjects: Record<S, Subject>,
}

type Bank<S extends string> = {
	title: string,
	factors: Record<S, number>,
	threshold: number,
	schools: School[],
}

type School = {
	title: string,
}

type Stats<S extends string> = Record<S, number>;
