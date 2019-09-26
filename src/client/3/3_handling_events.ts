import { fromEvent } from 'rxjs'
import { allBooks, allReaders } from '../mocks/data'

let button = document.getElementById('readersButton')

if (button) {
  fromEvent(button, 'click')
  .subscribe(event => {
    console.log(event)

    let readersDiv = document.getElementById('readers')
    for( let reader of allReaders) {
      if (readersDiv) {
        readersDiv.innerHTML += reader.name + '<br />'
      }
    }
  })
}
