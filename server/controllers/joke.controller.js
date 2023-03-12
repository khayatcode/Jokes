const Joke = require('../models/joke.model');

// Find all Jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

// Find one Joke by ID
module.exports.findJokeById= (req, res) => {
    Joke.findById(req.params.id)
        .then(jokes => res.json({ jokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

// Create a Joke
module.exports.createJoke = (req, res) => {
    const { setup, punchline } = req.body;
    Joke.create({
        setup,
        punchline
    })
        .then(newJoke => res.json({ joke: newJoke}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

//Update a Joke by Id
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

// Delete one Joke by ID
module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete({_id: req.params.id})
        .then(deleteConfirmation => res.json({deleteConfirmation}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}
