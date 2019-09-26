import { fromEvent, from, Observable } from 'rxjs'
import { allBooks, allReaders } from '../mocks/data'

const books$ = from(allBooks)

const booksObserver = {
  next: book => console.log(book),
  error: err => console.log(err),
  complete: () => console.log('Done!'),
}

books$.subscribe(booksObserver)
