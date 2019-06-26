export default {
    name: 'TODO Project Backend',
    port: process.env.PORT || 3001,
    mongoDB: { url: process.env.MONGODB_URI || 'mongodb://localhost:27017/to-do-back',
                testUrl: process.env.MONGODB_TEST_URI || 'mongodb://localhost:27017/to-do-back-test'},
    auth0: {
        clientId: 'gtsBGuyjuwEHxeGJO2ySF6EjISXFNb7b',
        clientSecret: '8_SKDeEyNIs4Ams8xGXP22czY5Kb_Bt2FqzrCrcJ0mOvrl6ErzJ3v6wkAK12mhr_',
        audience: 'to-do-back.basallo.es',
        grantType: 'client_credentials',
        url: 'https://to-do.eu.auth0.com/oauth/token'
    },
    jwt: {
        cache: true,
        rateLimit: true,
        requestsPerMinute: 5,
        uri: 'https://to-do.eu.auth0.com/.well-known/jwks.json',
        issuer: 'https://to-do.eu.auth0.com/',
        algorithms: ['RS256']
    },
    todo: { defaults: { text: 'New Task' }}
}
