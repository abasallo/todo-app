import Todo from './Todo'

export default class TodoList {

    static clone = (originalTodoList) => {

        let clonedTodoList = []
        originalTodoList.forEach(todo => { clonedTodoList.push(new Todo(todo.text, todo.completed, todo.id)) })
        return clonedTodoList
    }
}
