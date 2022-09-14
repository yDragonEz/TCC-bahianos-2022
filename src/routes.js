const express = require('express');

const CreateUserController = require('./controller/CreateUserController')

const router = express.Router()


// Routes GET
router.get('/', (req, res) => {
    res.render("index", {page: "home"})
})
router.get('/home', (req, res) => {
    res.render("index", {page: "home"})
})
router.get('/carrinho', (req, res) => {
    res.render("index", {page: "carrinho"})
})

router.get('/cadastro', (req, res) => {
    res.render("index", {page: "cadastro"})
})

router.get('/pg-product', (req, res) => {
    res.render('index', {page: "pg-product"})
})
router.get('/dados', (req, res) => {
    res.render('index', {page: "dados"})
})
router.get('/login', (req, res) => {
    res.render('index', {page: "login"})
})
router.get('/popup', (req, res) => {
    res.render('index', {page: "popup"})
})
router.get('/pesquisa', (req, res) => {
    res.render('index',  {page: "pesquisa"})
})



// ROUTES POST
router.post('/cadastro', CreateUserController.handle)


module.exports = router 