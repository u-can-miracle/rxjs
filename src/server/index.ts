import * as express from 'express'

import { allReaders, allBooks } from '../client/mocks/data'
import expressConfig from './config'

import * as data from '../client/mocks/data'

const app = express()

expressConfig(app)

app.get('/api/books', (req, res) => {
	res.json(allBooks)
})

app.get('/api/readers', (req, res) => {
	res.json(allReaders)
})

app.get('/api/errors/500', (req, res) => {
	const err = new Error('boom')

	res.status(500).json(err)
})

app.listen(3000, () => {
	// tslint:disable-next-line
	console.log('dev1.server starts')
})
