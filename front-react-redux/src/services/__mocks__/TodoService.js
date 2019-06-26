export default class TodoService {

    static getAll = () => Promise.resolve('todos')

    static add = (text) => Promise.resolve({ text: 'text' })

    static remove = (id) => Promise.resolve({ id: id })

    static toggle = (id) => Promise.resolve({ id: id })
}
