import { Observable } from 'rxjs'
import { allBooks, allReaders } from '../mocks/data'

// function subscribe(subscriber){
// 	for (const book of allBooks) {
// 		subscriber.next(book)
// 	}
// }

// const allBooksObservable$ = new Observable(subscriber => {
const allBooksObservable$ = Observable.create(subscriber => {

	if (document.title === 'asd') {
		subscriber.error('Incorect page title')
	}

	for (const book of allBooks) {
		subscriber.next(book)
	}

	setTimeout(() => {
		subscriber.complete()
	}, 2500)

	return () => console.log('Executing teardown code')
})

allBooksObservable$.subscribe(book => console.log(book))
