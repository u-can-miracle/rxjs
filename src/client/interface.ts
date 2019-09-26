export interface IBook {
	bookId: number
	title: string
	author: string
	publicationYear: number
}

export interface IReader {
	readerId: number
	name: string
	weeklyReadingGoaL: number
	totalMinutesRead: number
}
