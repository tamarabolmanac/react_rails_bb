Rails.application.routes.draw do
  
  root 'events#index'

  #match '*path', to: 'pages#index', via: :all

  namespace :api do
      namespace :v1 do
        resources :notes, only: [:index, :create, :destroy, :update]
      end
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
