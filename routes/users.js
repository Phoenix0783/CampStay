// const express = require('express')
// const router = express.Router();
// const { storeReturnTo } = require('../middleware');
// const passport = require('passport')
// const catchAsync = require('../utils/catchAsync')
// const User = require('../models/user');
// const users = require('../controllers/users')

// router.route('/register')
//     .get(users.renderRegister)
//     .post(catchAsync(users.register)) 

// router.route('/login')
//     .get(users.renderLogin)
//     .post(storeReturnTo,passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),users.login)

// router.get('/logout',users.logout)


// // router.get('/register',users.renderRegister)

// // router.post('/register',catchAsync(users.register)) 

// // router.get('/login',users.renderLogin)

// // router.post('/login', storeReturnTo,passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),users.login)

// // router.get('/logout',users.logout)

// module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router;