const foodRoute = require('./Foods')
const siteRoute = require('./site')
const accountRoute = require('./Account')
const billRouter = require('./Bill')

function route(app) {
    app.use('/food', foodRoute)
    app.use('/site', siteRoute)
    app.use('/account', accountRoute)
    app.use('/bill', billRouter)
}
module.exports = route;