import { of, from, throwError } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, filter, tap, catchError } from 'rxjs/operators'
import { IReader, IBook } from '../interface'
