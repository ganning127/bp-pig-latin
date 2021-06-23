
var piglatin = require('pig-latin');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const eng = req.query.eng.toLowerCase();

    const pigLatinFinal = piglatin(eng);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: pigLatinFinal
    };
}