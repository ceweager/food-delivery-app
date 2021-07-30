Rails.application.routes.draw do
  get 'order/index'
  get 'order/show'
  get 'order/new'
  get 'order/create'
  get 'order/edit'
  get 'order/update'
  get 'order/delete'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
