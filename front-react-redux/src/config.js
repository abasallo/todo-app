export default {
    name: 'TODO Project',
    components: {
        logOutButtonCaption: 'Logout',
        todoAddCaption: 'Add TODO',
        todoAddButtonStyle: { marginRight: '1%', marginBottom: '1.5%', float: 'right' },
        filterButtonAllCaption: 'All',
        filterButtonActiveCaption: 'Active',
        filterButtonCompletedCaption: 'Completed',
        todoListStyle: { margin: '1% 5% 1% 1%' },
        todoListDeleteButtonStyle: { padding: '0' }
    },
    todo: { defaults: { text: 'New Task' }},
    auth0: {
        clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '9MH4fRYhsgg8JAZMOzZbq6Pu8Gx9DjQ4',
        domain: process.env.REACT_APP_AUTH0_DOMAIN || 'to-do.eu.auth0.com',
        options: { auth: { redirect: false,
            params: { audience: process.env.REACT_APP_AUTH0_AUDIENCE || 'to-do-back.basallo.es', scope: 'openid email' }}}
    },
    back: {
        url: {
            protocol: process.env.REACT_APP_BACK_URL_PROTOCOL || 'http',
            host: process.env.REACT_APP_BACK_URL_HOST || 'localhost',
            port: process.env.REACT_APP_BACK_URL_PORT || '3001',
            tail: 'api/v1/todo'}
    }
}
