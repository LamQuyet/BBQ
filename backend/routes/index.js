const foodRoute = require('./Foods')
const siteRoute = require('./site')

function route(app) {
    app.use('/food', foodRoute)
    app.use('/site', siteRoute)
}
module.exports = route;