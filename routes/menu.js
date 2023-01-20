const express = require('express')
const router = require('router')
const menuController= require('../controllers/menu')

const { ensureAuth,ensureGuest} = require('../middleware/auth')


//read
router.get('/',menuController.getIndex)

//the : indicates that what follows will vary
//update
router.get('/:id',menuController.editMenu)

//delete 
router.get('/delete/:id',menuController.deleteMenu)

//create
router.post('/save',menuController.saveMenu)

router.post('/new',menuController.newMenu)



module.exports  = router