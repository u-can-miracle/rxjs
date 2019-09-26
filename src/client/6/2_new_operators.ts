import { Observable, of, from, throwError } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, filter, tap, catchError } from 'rxjs/operators'
import { IReader, IBook } from '../interface'

function grabAndLogClassics(year, log) {
  return source$ => {
    return new Observable(subscriber => {
      return source$.subscribe(
        (book: IBook) => {
          if (book.publicationYear <= year) {
            subscriber.next(book)
            if (log) {
              console.log(`Classic ${book.title}`)
            }
          }
        },
        err => subscriber.error(err),
        () => subscriber.complete(),
      )
    })
  }
}

const grabClassics = year => filter((book: IBook) => book.publicationYear <= year)

ajax('/api/books')
	.pipe(
		mergeMap(ajaxResponse => ajaxResponse.response),
		// filter((book: IBook) => book.publicationYear < 1960),
		// tap((oldBook: IBook) => console.log(`title ${oldBook.title}`))
    grabAndLogClassics(1957, true)
	)
	.subscribe(
		val => console.log(val)
	)
