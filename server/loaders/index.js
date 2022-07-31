const expressJson = require('./express_json')
// const morgan = require('./morgan')
// const helmet = require('./helmet')
// const errorHandler = require('./error_handler')
// const bugSnagHandler = require('./bugsnag')
// const responseTime = require('./response_time')
// const requestId = require('./request_id')
// const passport = require('./passport')

require('./mongoose')

// const env = process.env.NODE_ENV !== 'production'

module.exports = (app) => {
    expressJson(app)
//   bugSnagHandler(app)
//   passport(app)
//   requestId(app)
//   morgan(app)
//   helmet(app)
//   if (env) {
//     errorHandler(app)
//     responseTime(app)
//   }
}