
const piglatin = require('pig-latin');
const joke = require('awesome-dev-jokes');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const action = req.query.action;

    let textToTranslate = action === "randomJoke" ? joke.getRandomJoke() : action

    const pigLatinFinal = piglatin(textToTranslate);

    context.res = {
        body: pigLatinFinal
    };
}