import { Observable, of, from, fromEvent, concat } from 'rxjs'
import { allBooks, allReaders } from '../mocks/data'
import { IReader, IBook } from '../interface'

const source1$ = of('hello', 0, true, allReaders[0].name)

// source1$.subscribe(val => console.log(val))

const source2$ = from(allBooks)

// source2$.subscribe(book => console.log(book.title))

concat(source1$, source2$).subscribe(value => console.log(value))
