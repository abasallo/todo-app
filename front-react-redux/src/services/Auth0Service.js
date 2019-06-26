import Auth0Lock from 'auth0-lock'

import config from '../config'

export default class Auth0Service {

    static clientId = config.auth0.clientId
    static domain = config.auth0.domain
    static options = config.auth0.options

    static lock = new Auth0Lock(Auth0Service.clientId, Auth0Service.domain, Auth0Service.options)

    static getUserInfoCallback = (error, profile) => {

        Auth0Service.setEmail(profile.email)
        window.location.reload()
    }

    static getUserInfo(accessToken) {

        Auth0Service.lock.getUserInfo(accessToken, Auth0Service.getUserInfoCallback)
    }

    static authenticatedCallback = (authResult) => {

        Auth0Service.setAccessToken(authResult.accessToken)
        Auth0Service.getUserInfo(authResult.accessToken)
    }

    static login() {

        Auth0Service.lock.show()
        Auth0Service.lock.on('authenticated', Auth0Service.authenticatedCallback)
    }

    static setAccessToken(accessToken) {

        localStorage.setItem('access_token', accessToken)
    }

    static getAccessToken() {

        return localStorage.getItem('access_token')
    }

    static setEmail(email) {

        localStorage.setItem('email', email)
    }

    static getEmail() {

        return localStorage.getItem('email')
    }

    static logout() {

        localStorage.removeItem('access_token')
        localStorage.removeItem('email')
        window.location.reload()
    }
}
