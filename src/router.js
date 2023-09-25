
const test = require('./controller/test')
const home_search = require('./controller/home_search')


module.exports = (app) => {
    app.use('/api/test', test)
    app.use('/api/home_search', home_search)
}
