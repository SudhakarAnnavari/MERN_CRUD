const express = require('express')
const { createUser, getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controller/userController')
const Router = express.Router()


Router.post('/',createUser)
Router.get('/',getAllUsers)
Router.get('/:id',getSingleUser)
Router.put('/:id',updateUser)
Router.delete('/:id',deleteUser)

module.exports = Router;