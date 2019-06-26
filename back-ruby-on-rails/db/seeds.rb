group :development do

  Todo.create completed: false, text: 'task1'
  Todo.create completed: false, text: 'task2'
  Todo.create completed: true, text: 'task3'
end