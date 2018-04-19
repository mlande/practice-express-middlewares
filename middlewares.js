function injectCatFact(req, res, next) {
    catService.random().then(fact => {
        console.log(fact)
        res.locals.facts = [fact.text]
        next()
    })
}

function renderPage(req, res, next) {
    res.render('index');
}


module.exports = { injectCatFact, renderPage }

