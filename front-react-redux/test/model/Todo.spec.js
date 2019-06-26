import Todo from '../../src/model/Todo'
import FilterTypes from '../../src/model/FilterTypes'

it('Constructor creates object with provided parameters', () => {

    let todo = new Todo('Text', true)

    expect(todo.id).toBe(-1)
    expect(todo.completed).toBe(true)
    expect(todo.text).toBe('Text')
})

it('Constructor creates object with defaults, on parameters absence', () => {

    let todo = new Todo()

    expect(todo.id).toBe(-1)
    expect(todo.completed).toBe(false)
    expect(todo.text).toBe('New Task')
})

it('Toggle method toggles completed value', () => {

    let todo = new Todo()

    expect(todo.completed).toBe(false)

    todo.toggle()

    expect(todo.completed).toBe(true)
})

it('Filters Todo array by provided filterType', () => {

    let completedTodo = new Todo('Task 1', true)
    let pendingTodo = new Todo('Task 1', false)
    let todos = [ completedTodo, pendingTodo ]

    expect(Todo.filterTodoArrayBy(todos, FilterTypes.showAll)).toMatchObject([ completedTodo, pendingTodo ])
    expect(Todo.filterTodoArrayBy(todos, FilterTypes.showCompleted)).toMatchObject([ completedTodo ])
    expect(Todo.filterTodoArrayBy(todos, FilterTypes.showActive)).toMatchObject([ pendingTodo ])
})
