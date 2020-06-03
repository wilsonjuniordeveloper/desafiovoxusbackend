const express = require('express');

const validatorMiddleware = require('../middlewares/validator')

const createDatabase = require('../model/create')
const listDatabase = require('../model/list')
const uploadDatabase = require('../model/update')
const deleteDatabase = require('../model/delete')

const router = express.Router();


//route responsible for creating a payment in the database
router.post('/payment', validatorMiddleware, createDatabase)

//route responsible for list a payment in the database
router.get('/payment', listDatabase)

//route responsible for updating a single payment record in the database
router.put('/payment/:id',validatorMiddleware, uploadDatabase)

//route responsible for deleting a single payment record in the database
router.delete('/payment/:id', deleteDatabase)
 



module.exports = app => app.use('/api', router)