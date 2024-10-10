const db = require('../db')
const { Actor, Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const movie1 = await new Movie({
        title: 'Transformers 2: Revenge of the Fallen',
        runtime: 150,
        rating: 6,
        yearReleased: 2009,
        description: 'Two years after he and his Autobot friends saved the Earth from the Decepticons, Sam Witwicky (Shia LaBeouf) faces a new battle: college. Meanwhile, Optimus Prime and the Autobots are working with a secret military organization and trying to make a home for themselves on Earth. When an ancient Decepticon known as The Fallen rises up to wreak vengeance, Sam and his girlfriend, Mikaela, must figure out the history of the Transformers on Earth and find a way to defeat The Fallen once and for all.'
    })
    movie1.save()

    const movie2 = await new Movie({
        title: 'Transformers',
        runtime: 2007,
        rating: 7.1,
        yearReleased: 2007,
        description: 'The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power, but only human Sam Witwicky can save the world from total destruction.'
    })
    movie2.save()

    const movie3 = await new Movie({
        title: 'Transformers 3: Dark of the Moon',
        runtime: 154,
        rating: 6.1,
        yearReleased: 2011,
        description: 'Sam Witwicky (Shia LaBeouf) and his new girlfriend, Carly (Rosie Huntington-Whiteley), join the fray when the evil Decepticons renew their longstanding war against the Autobots. Optimus Prime (Peter Cullen) believes that resurrecting ancient Transformer Sentinel Prime (Leonard Nimoy), once the leader of the Autobots, may lead to victory. That decision, however, has devastating consequences; the war appears to tip in favor of the Decepticons, leading to a climactic battle in Chicago.'
    })
    movie3.save()

    const movie4 = await new Movie({
        title: 'Disturbia',
        runtime: 105,
        rating: 6.8,
        yearReleased: 2007,
        description: 'A troubled high school student becomes convinced he is living next door to a wanted serial killer. Struggling to come to terms with the death of his father, the teen lands himself in hot water after a fight with a teacher and is put under house arrest. During his domestic confinement, he begins to spy on his mysterious neighbour, believing him to be a murderous psychopath on the run from the authorities. Witwicky (Shia LaBeouf) and his new girlfriend, Carly (Rosie Huntington-Whiteley), join the fray when the evil Decepticons renew their longstanding war against the Autobots. Optimus Prime (Peter Cullen) believes that resurrecting ancient Transformer Sentinel Prime (Leonard Nimoy), once the leader of the Autobots, may lead to victory. That decision, however, has devastating consequences; the war appears to tip in favor of the Decepticons, leading to a climactic battle in Chicago.'
    })
    movie4.save()

const reviews = [
    {
        title: 'Transformers 2: Revenge of the Fallen',
        score: 20,
        comment: 'Transformers: Revenge of the Fallen is a noisy, underplotted, and overlong special effects extravaganza that lacks a human touch.',
        movie: movie1._id
    },
    {
        title: 'Transformers',
        score: 57,
        comment: 'While believable characters are hard to come by in Transformers, the effects are staggering and the action is exhilarating.',
        movie: movie2._id
    },
    {
        title: 'Transformers 3: Dark of the Moon',
        score: 70,
        comment: 'Its special effects -- and 3D shots -- are undeniably impressive, but they arent enough to fill up its loud, bloated running time, or mask its thin, indifferent script.',
        movie: movie3._id
    },
    {
        title: 'disturbia',
        score: 70,
        comment: 'The Beginning of the Movie is not the greatest but it catches up in the middle of it and then gets a crazy movie which is very exciting and a great thriller , the actors are good and it is a very good movie overall I would say even the concept is amazing .',
        movie: movie4._id
    }]

const actors = [

    {
        name: 'Shia LaBeouf',
        age: 38,
        living: true,
        role: 'Sam Witwicky',
        appearsIn: movie2._id
    },
    {
        name: 'Megan Fox',
        age: 38,
        living: true,
        role: 'Mikaela Banes',
        appearsIn: movie1._id
    }, 
    {
        name: 'Rosie Huntington-Whiteley',
        age: 37,
        living: true,
        role: 'Carly Spencer',
        appearsIn: movie3._id
    },

]

await Actor.insertMany(actors)
console.log('Created actors list!')
await Review.insertMany(reviews)
console.log('Created reviews')
}

const run = async () => {
    await main ()
    db.close ()

}
 
run ()