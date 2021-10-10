Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions", registrations: "registrations" }

  devise_scope :user do
    # authenticated :user do
    #   root 'account#show', as: :authenticated_root
    # end
  
    # unauthenticated do
    #   root 'devise/sessions#new', as: :unauthenticated_root
    # end
    # 1: If you put your get_company route here, it still works
    get '/users/sign_up' => 'registrations#create'
    get '/users/login' => 'sessions#create'
    get '/users/sign_out' => 'sessions#destroy'
  end 

  root to: 'pages#home'
  get 'meals/:id', to: 'pages#home'
  get 'meals', to: 'pages#home'
  get 'login', to: 'pages#home'
  get 'users/:user_id/baskets/:id', to: 'pages#home'
  get 'sign_up', to: 'pages#home'
  get 'users/:user_id/orders/:id', to: 'pages#home'
  get 'users/:user_id/orders', to: 'pages#home'

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :meals, only: [ :index, :show ]

      resources :users do
        resources :order_meals, only: [:new, :create] do
          delete :destroy, on: :collection
        end
        resources :baskets, only: [:show]
        resources :orders, only: [:index, :show, :new, :create] 
      end

      resources :baskets do
        resources :orders, only: [:new, :create]
      end
      resources :order_meals, only: [:destroy]
    end
  end
end
