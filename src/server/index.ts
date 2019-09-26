import * as express from 'express'

import expressConfig from './config'

import * as data from '../client/mocks/data'

const app = express()

expressConfig(app)

app.get('/api/readers', (req, res) => {
	res.json(data.allReaders)
})

app.listen(3000, () => {
	// tslint:disable-next-line
	console.log('dev1.server starts')
})
