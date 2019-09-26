import { Observable } from 'rxjs'

const currentTime$ = new Observable(subscriber => {
  const timeString = new Date().toLocaleTimeString()
  subscriber.next(timeString)
  subscriber.complete()
})

currentTime$.subscribe(
  time => console.log('Observable 1 ', time)
)

setTimeout(() => {
  currentTime$.subscribe(
    time => console.log('Observable 2 ', time)
  )
}, 1000)

setTimeout(() => {
  currentTime$.subscribe(
    time => console.log('Observable 3 ', time)
  )
}, 2000)
