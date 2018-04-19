const catService = require("./cat-service")


function initFacts(req, res, next) {
    res.locals.facts = []
    next()
}

function injectCatFact(numberOfFacts) {
    return (req, res, next) => {
        const promises = []
        for (let i = 0; i < numberOfFacts; i++) {
            promises.push(catService.random())
        }
        Promise.all(promises)
            .then(facts => {
                res.locals.facts = facts.map(f => f.text)
                next()
            })
    }
}


module.exports = { injectCatFact, initFacts }

