const express = require('express')
const router = require('router')
const loginController= require('../controllers/login.js')

const { ensureAuth,ensureGuest} = require('../middleware/auth')



router.get('/',loginController.getLogin)
router.get('/new-act',loginController.getSignup)
router.get('/logout',loginController.getLogout)
router.post('/',loginController.postLogin)
router.post('/new',loginController.postSignup)


module.exports  = router