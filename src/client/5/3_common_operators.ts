import { ajax } from 'rxjs/ajax'
import { mergeMap, filter, tap } from 'rxjs/operators'
import { IReader, IBook } from '../interface'

ajax('/api/books')
	.pipe(
		mergeMap(ajaxResponse => ajaxResponse.response),
		filter((book: IBook) => book.publicationYear < 1960),
		tap((oldBook: IBook) => console.log(`title ${oldBook.title}`))
	)
	.subscribe(
		val => console.log(val)
	)
