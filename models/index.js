const mongoose = require('mongoose')
const actorSchema = require('./actors')
const moviesSchema = require('./movies')
const reviewSchema = require('./reviews')

const Actor = mongoose.model('Actor', actorSchema)
const Movie = mongoose.model('Movie',moviesSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Movie,
    Actor,
    Review
}