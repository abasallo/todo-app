import Auth0Lock from 'auth0-lock'

import Auth0Service from '../../src/services/Auth0Service'

import config from '../../src/config'

const originalSetEmail = Auth0Service.setEmail
const originalLock = Auth0Service.lock
const originalSetAccessToken = Auth0Service.setAccessToken
const originalGetUserInfo = Auth0Service.getUserInfo

const mockedSetEmail = jest.fn()
const mockedLock = { getUserInfo: jest.fn(), show: jest.fn(), on: jest.fn() }
const mockedSetAccessToken = jest.fn()
const mockedGetUserInfo = jest.fn()

it('Auth0 lock instance is created and populated properly', () => {

    expect(Auth0Service.clientId).toBe(config.auth0.clientId)
    expect(Auth0Service.domain).toBe(config.auth0.domain)
    expect(Auth0Service.options).toBe(config.auth0.options)
    expect(originalLock).toBeInstanceOf(Auth0Lock)
})

it('On user info recovery, callback must set Email', () => {

    Auth0Service.setEmail = mockedSetEmail

    Auth0Service.getUserInfoCallback('error', { email: 'email' })

    expect(mockedSetEmail).toBeCalledWith('email')
})

it('Get user info relays on lock control and sets properly a callback to get the response', () => {

    Auth0Service.lock = mockedLock

    Auth0Service.getUserInfo('accessToken')

    expect(mockedLock.getUserInfo).toBeCalledWith('accessToken', Auth0Service.getUserInfoCallback)
})

it('On authentication, callback must set Access Token and call to get User Info', () => {

    Auth0Service.setAccessToken = mockedSetAccessToken
    Auth0Service.getUserInfo = mockedGetUserInfo

    Auth0Service.authenticatedCallback({ accessToken: 'accessToken' })

    expect(mockedSetAccessToken).toBeCalledWith('accessToken')
    expect(mockedGetUserInfo).toBeCalledWith('accessToken')
})


it('Login relays on lock control and sets properly a callback to get the response', () => {

    Auth0Service.lock = mockedLock

    Auth0Service.login()

    expect(mockedLock.show).toBeCalled()
    expect(mockedLock.on).toBeCalledWith('authenticated', Auth0Service.authenticatedCallback)
})

global.localStorage = { getItem: jest.fn(), setItem: jest.fn(), removeItem: jest.fn() }

it('Sets access token value', () => {

    Auth0Service.setAccessToken('token')

    expect(global.localStorage.setItem).toBeCalledWith('access_token', 'token')
})

it('Returns access token value', () => {

    Auth0Service.getAccessToken()

    expect(global.localStorage.getItem).toBeCalledWith('access_token')
})

it('Sets access token value', () => {

    Auth0Service.setEmail('email')

    expect(global.localStorage.setItem).toBeCalledWith('email', 'email')
})

it('Returns access token value', () => {

    Auth0Service.getEmail()

    expect(global.localStorage.getItem).toBeCalledWith('email')
})

it('Logout cleans token', () => {

    Auth0Service.logout()

    expect(global.localStorage.removeItem).toBeCalledWith('access_token')
    expect(global.localStorage.removeItem).toBeCalledWith('email')
})

afterEach(() => {
    Auth0Service.setEmail = originalSetEmail
    Auth0Service.lock = originalLock
    Auth0Service.setAccessToken = originalSetAccessToken
    Auth0Service.getUserInfo = originalGetUserInfo
})