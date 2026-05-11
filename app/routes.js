//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Routes for E2E testing
const POBRoutes = require('./routes/POB')

router.use('/', POBRoutes)

module.exports = router

