import { Observable, Subject, of, from, throwError } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, filter, tap, catchError } from 'rxjs/operators'
import { IReader, IBook } from '../interface'

const subject$ = new Subject()

subject$.subscribe(
  value => console.log(`Observer1: ${value}`)
)

subject$.subscribe(
  value => console.log(`Observer2: ${value}`)
)

subject$.next('Hello')

const source$ = new Observable(subscriber => {
  subscriber.next('Greetings!')
})

source$.subscribe(subject$)
