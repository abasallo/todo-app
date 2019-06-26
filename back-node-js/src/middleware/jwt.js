import jwks from 'jwks-rsa'
import jwt from 'express-jwt'

import config from '../config'

export default jwt({
    secret: jwks.expressJwtSecret({ cache: config.jwt.cache,
        rateLimit: config.jwt.rateLimit,
        jwksRequestsPerMinute: config.jwt.requestsPerMinute,
        jwksUri: config.jwt.uri }),
    audience: config.auth0.audience,
    issuer: config.jwt.issuer,
    algorithms: config.jwt.algorithms
})
