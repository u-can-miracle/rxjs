import { fromEvent, interval, Observable } from 'rxjs'

const timesDiv = document.getElementById('times')
const button = document.getElementById('timerButton')

// const timer$ = interval(1000)

const timer$ = new Observable(subscribe => {
  let i = 0
  const intervalId = setInterval(() => {
    subscribe.next(i++)
  }, 1000)

  return () => {
    console.log('executing teardown')
    clearInterval(intervalId)
  }
})

let timerSubscription
let timerConsoleSubscription

if (timesDiv) {
  timerSubscription = timer$.subscribe(
    value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br />`,
    null,
    () => console.log('All done!')
  )

  timerConsoleSubscription = timer$.subscribe(
    value => console.log(`cl - ${new Date().toLocaleTimeString()} (${value})`)
  )

  timerSubscription.add(timerConsoleSubscription)
  // timerSubscription.remove(timerConsoleSubscription)
}

if (button) {
  fromEvent(button, 'click')
    .subscribe(
      event => timerSubscription.unsubscribe()
    )
}
