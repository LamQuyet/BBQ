const foodRoute = require('./Foods')
const siteRoute = require('./site')
const accountRoute = require('./Account')

function route(app) {
    app.use('/food', foodRoute)
    app.use('/site', siteRoute)
    app.use('/account', accountRoute)
}
module.exports = route;