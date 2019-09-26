import { of, from, throwError } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, filter, tap, catchError } from 'rxjs/operators'
import { IReader, IBook } from '../interface'

// ajax('/api/books')
ajax('/api/errors/500')
	.pipe(
		mergeMap(ajaxResponse => ajaxResponse.response),
		filter((book: IBook) => book.publicationYear < 1960),
		tap((oldBook: IBook) => console.log(`title ${oldBook.title}`)),
		// catchError(err => of({ title: 'title1', author: 'author1' }))
		// catchError((err, caught) => caught)
		catchError(err => throwError(`Something bad happened - ${err.message}`))
	)
	.subscribe(
		val => console.log(val),
		error => console.log(`Error: ${error}`),
	)
