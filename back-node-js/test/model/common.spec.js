import common from '../../src/model/common'

it('Date fields must be populated automatically on save with provided date', () => {

    const context = { updated_at: undefined, created_at: undefined }
    const bindedFunction = common.preSaveUpdatedAndCreatedAt.bind(context)
    const next = jest.fn()

    bindedFunction(next)

    expect(context.updated_at).toBeInstanceOf(Date)
    expect(context.created_at).toBeInstanceOf(Date)
    expect(next).toBeCalled()
})

it('If creation date is already set is left untouched', () => {

    const context = { updated_at: undefined, created_at: 'created_at' }
    const bindedFunction = common.preSaveUpdatedAndCreatedAt.bind(context)
    const next = jest.fn()

    bindedFunction(next)

    expect(context.created_at).toBe('created_at')
})
