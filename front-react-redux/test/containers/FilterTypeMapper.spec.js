import TodoFilterContainer from '../../src/containers/FilterTypeMapper'
import FilterTypes from '../../src/model/FilterTypes'

it('Maps selected tab with corresponding FilterType', () => {

    expect(TodoFilterContainer.mapTabSelectedWithFilterType(0)).toBe(FilterTypes.showAll)
    expect(TodoFilterContainer.mapTabSelectedWithFilterType(1)).toBe(FilterTypes.showActive)
    expect(TodoFilterContainer.mapTabSelectedWithFilterType(2)).toBe(FilterTypes.showCompleted)
    expect(TodoFilterContainer.mapTabSelectedWithFilterType(-1)).toBe(FilterTypes.showAll)
})
