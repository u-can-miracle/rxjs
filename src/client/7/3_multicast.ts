import { Observable, Subject, of, from, throwError, interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  mergeMap, filter, tap, catchError, take,
  multicast, refCount, publish, share,
} from 'rxjs/operators'
import { IReader, IBook } from '../interface'


const source$ = interval(1000).pipe( // log unlinked
  take(4),
  // multicast(new Subject()),

  // publish(),
  // refCount(),

  share(),
)

// const subject$ = new Subject() // in parallel
// source$.subscribe(subject$)

source$.subscribe(
// subject$.subscribe(
  value => console.log('Obs 1 ' , value)
)

setTimeout(() => {
  source$.subscribe(
  // subject$.subscribe(
    value => console.log('Obs 2 ' , value)
  )
}, 1000)

setTimeout(() => {
  source$.subscribe(
  // subject$.subscribe(
    value => console.log('Obs 3 ' , value)
  )
}, 2000)

setTimeout(() => {
  source$.subscribe(
  // subject$.subscribe(
    value => console.log('Obs 4 ' , value),
    null,
    () => console.log('Observer 4 complete.')
  )
}, 4500)

// source$.connect()
