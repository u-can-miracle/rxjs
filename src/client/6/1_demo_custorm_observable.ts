import { of, from, throwError } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, filter, tap, catchError, map } from 'rxjs/operators'

const source$ = of(1,2,3,4)

function doublerOperator(){
  return map(value => value * 2)
}

source$.pipe(
  doublerOperator()
)
.subscribe(
  val => console.log(val) // 2, 4, 6, 8
)
