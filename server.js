const express = require ('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require ('./db')
const {Actor, Movie, Reviews, Review} = require('./models')
const {reset} = require ('nodemon')

const app = express ()

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    res.send('Shia Labeoufs Greatest Hits')

})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })

app.get('/movies', async (req,res) => {
    const movies = await Movie.find({})
    res.json(movies)
})

app.get('/actors', async (req,res) => {
    const actors = await Actor.find({})
    res.json(actors)
})
app.get('/reviews', async (req,res) => {
    const reviews = await Review.find({})
    res.json(reviews)
})

//routes

app.get('/movies/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const movie = await Movie.findById(id)
        if(!movie) throw Error('404 Movie not found')
            res.json(movie)
    }
    catch (e){
        console.log('error')
        res.send('movie not found')
    }
})

app.get('/actors/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const actor = await Actor.findById(id)
        if(!actor) throw Error('404 Movie not found')
            res.json(actor)
    }
    catch (e){
        console.log('error')
        res.send('movie not found')
    }
})

app.get('/reviews/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const reviews = await Review.findById(id)
        if(!reviews) throw Error('404 Movie not found')
            res.json(reviews)
    }
    catch (e){
        console.log('error')
        res.send('movie not found')
    }
})