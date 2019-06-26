import FilterTypes from '../model/FilterTypes'

export default {

    mapTabSelectedWithFilterType: (item) => {

        let filter
        switch (item) {
            case 0:
                filter = FilterTypes.showAll
                break
            case 1:
                filter = FilterTypes.showActive
                break
            case 2:
                filter = FilterTypes.showCompleted
                break
            default:
                filter = FilterTypes.showAll
        }
        return filter
    }
}