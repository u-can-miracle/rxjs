import { fromEvent } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { allBooks, allReaders } from '../mocks/data'

let button = document.getElementById('readersButton')

if (button) {
  fromEvent(button, 'click')
  .subscribe(event => {
    ajax('/api/readers')
      .subscribe(ajaxResponse => {
        console.log(ajaxResponse)

        const readers = ajaxResponse.response

        let readersDiv = document.getElementById('readers')
        for( let reader of readers) {
          if (readersDiv) {
            readersDiv.innerHTML += reader.name + '<br />'
          }
        }
      })
  })
}
