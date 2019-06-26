class TodosController < ApplicationController

  def show_all
    render json: Todo.where(email: request.headers['user'])
  end

  def show
    render json: Todo.find_by(id: params[:id], email: request.headers['user'])
  end

  def create
    render json: Todo.create(completed: params[:completed], text: params[:text], email: request.headers['user'])
  end

  def update
    render json: Todo.update(params[:id], completed: params[:completed], text: params[:text], email: request.headers['user'])
  end

  def toggle
    todo = Todo.find_by(id: params[:id], email: request.headers['user'])
    render json: Todo.update(params[:id], completed: !todo.completed)
  end

  def delete
    render json: Todo.find_by(id: params[:id], email: request.headers['user']).destroy
  end
end