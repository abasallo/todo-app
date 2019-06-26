import TodoList from '../../src/model/TodoList'
import Todo from '../../src/model/Todo'

it('Clones passed TodoList', () => {

    let todo = new Todo('todo')
    let anotherTodo = new Todo('anotherTodo')
    let todoList = [todo, anotherTodo]
    let clonedTodoList = TodoList.clone(todoList)

    expect(clonedTodoList).not.toBe(todoList)
    expect(clonedTodoList[0]).not.toBe(todoList[0])
    expect(clonedTodoList[1]).not.toBe(todoList[1])
    expect(clonedTodoList[0].text).toBe('todo')
    expect(clonedTodoList[1].text).toBe('anotherTodo')
})
