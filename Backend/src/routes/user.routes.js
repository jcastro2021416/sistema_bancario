'use strict'

const {Router} = require('express');
const {updateUser, loginUser, viewUserData, viewBalance, historyTransaction, menuUser, deleteUser, createFavorite, viewFavorite} = require("../controller/userController");
const { readFavorite, updateFavorite, deleteFavorite } = require('../controller/favoriteController')
const { createTransferencias } = require('../controller/transferenciaController')


const api = Router();
api.get('/viewUserData-user', viewUserData);
api.put('/update-user', updateUser);
api.post('/login-user', loginUser);
api.get('/viewBalance-user', viewBalance )
api.get('/historyTransaction-user', historyTransaction)
api.post('/create-favorite',createFavorite )
api.get('/read-favorite', viewFavorite);
// api.put('/update-favorite', updateFavorite);
// api.delete('/delete-favorite', deleteFavorite);
api.post('/transfers', createTransferencias);
// api.post('/login');
api.get('/menu-user', menuUser)
api.delete('/delete-user', deleteUser);

module.exports = api;