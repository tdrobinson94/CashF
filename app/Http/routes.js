'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/signup', 'UserController.store')
Route.post('/login', 'UserController.login')
Route.post('/account', 'AccountsController.store').middleware('auth')
Route.get('/profile', 'UserController.show').middleware('auth')
Route.get('/profile/accounts', 'AccountsController.show').middleware('auth')
Route.delete('/account/:id', 'AccountsController.delete').middleware('auth')
