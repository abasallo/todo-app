import FilterTypes from '../../src/model/FilterTypes'

it('Contains different settings for Todo list filtering', () => {

    expect(FilterTypes.showAll).toBe('SHOW_ALL')
    expect(FilterTypes.showCompleted).toBe('SHOW_COMPLETED')
    expect(FilterTypes.showActive).toBe('SHOW_ACTIVE')
})
