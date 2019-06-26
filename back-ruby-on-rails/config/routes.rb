Rails.application.routes.draw do

  scope '/api' do
    scope '/v1' do
      get '/todo' => 'todos#show_all'
      get '/todo/:id' => 'todos#show'
      post '/todo' => 'todos#create'
      put '/todo/:id' => 'todos#update'
      patch '/todo/toggle/:id' => 'todos#toggle'
      delete '/todo/:id' => 'todos#delete'
    end
  end
end