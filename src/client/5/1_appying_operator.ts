import { of } from 'rxjs'
import { map, filter  } from 'rxjs/operators'

const source$ = of(1, 2, 3, 4, 5)

source$.pipe(
	map(value => value * 2),
	filter(mappedValue => mappedValue > 5)
)
.subscribe(
	finalValue => console.log(finalValue)
)

// transformation

// filtering

// combination

// utility

// conditional

// aggregate

// multicasting
