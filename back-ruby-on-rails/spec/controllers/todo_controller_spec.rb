require 'rails_helper'

RSpec.describe "TODO Rest API", :type => :request do

  before(:all) do
    @headers = { 'authorization' => 'token', 'user' => 'email' }

    @task1 = Todo.create completed: false, text: 'task1', email: 'email'
    @task2 = Todo.create completed: false, text: 'task2', email: 'email'
    @task3 = Todo.create completed: true, text: 'task3', email: 'email'
    @task4 = Todo.create completed: true, text: 'otherUser', email: 'email2'
  end

  before(:each) do
    allow(JsonWebToken).to receive(:verify).and_return(true)
  end

  describe '#show_all' do
    context 'on GET call with no ID shows all for a user/email' do
      it 'returns all Todo instances' do
        get '/api/v1/todo/', params: {}, headers: @headers

        expect(response.content_type).to eq('application/json')
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body).length).to eq(3)
      end
    end
  end

  describe '#show' do
    context 'on GET call with ID shows target element' do
      it 'returns provided ID corresponding Todo instance' do
        get "/api/v1/todo/#{@task1.id}", params: {}, headers: @headers

        expect(response.content_type).to eq('application/json')
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)).to eq('id' => @task1.id, 'completed' => false, 'text' => 'task1', 'email' => 'email')
      end
    end
  end

  describe '#create' do
    context 'on POST call creates new model with provided data' do
      it 'creates a new Todo instance with the provided info' do
        post '/api/v1/todo/', params: { completed: true, text: 'test', email: 'email' }, headers: @headers

        expect(response.content_type).to eq('application/json')
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['completed']).to eq true
        expect(JSON.parse(response.body)['text']).to eq 'test'
      end
    end
  end

  describe '#update' do
    context 'on PUT call updates target model object with provided data' do
      it 'modifies a Todo instance with the provided info' do
        put "/api/v1/todo/#{@task1.id}", params: { completed: false, text: 'test', email: 'email' }, headers: @headers

        expect(response.content_type).to eq('application/json')
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['completed']).to eq false
        expect(JSON.parse(response.body)['text']).to eq 'test'
        expect(JSON.parse(response.body)['email']).to eq 'email'
        expect(Todo.find(@task1.id).completed).to eq false
        expect(Todo.find(@task1.id).text).to eq 'test'
        expect(Todo.find(@task1.id).email).to eq 'email'
      end
    end
  end

  describe '#patch' do
    context 'on PATCH call updates target model object property' do
      it 'modifies a Todo instance property with the provided param' do
        patch "/api/v1/todo/toggle/#{@task1.id}", params: { completed: true }, headers: @headers

        expect(response.content_type).to eq('application/json')
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['completed']).to eq true
        expect(JSON.parse(response.body)['text']).to eq 'task1'
        expect(JSON.parse(response.body)['email']).to eq 'email'
        expect(Todo.find(@task1.id).completed).to eq true
        expect(Todo.find(@task1.id).text).to eq 'task1'
        expect(Todo.find(@task1.id).email).to eq 'email'
      end
    end
  end

  describe '#delete' do
    context 'on DELETE call removes target model object' do
      it 'deletes Todo instance corresponding with the provided ID' do
        delete "/api/v1/todo/#{@task1.id}", params: {}, headers: @headers

        expect(response.content_type).to eq('application/json')
        expect(response).to have_http_status(:ok)
        expect { Todo.find(1) }.to raise_exception(ActiveRecord::RecordNotFound)
      end
    end
  end

  after(:all) do
    Todo.delete @task1
    Todo.delete @task2
    Todo.delete @task3
    Todo.delete @task4
  end
end
