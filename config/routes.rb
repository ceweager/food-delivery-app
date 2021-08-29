Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/index', to: 'pages#home', as: 'food_app'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :meals, only: [ :index, :show ]

      resources :users do
        resources :order_meals, only: [:new, :create]
        resources :baskets, only: [:show]
        resources :orders, only: [:show] 
      end

      resources :baskets do
        resources :orders, only: [:new, :create]
      end
      resources :order_meals, only: [:destroy]
    end
  end
end
