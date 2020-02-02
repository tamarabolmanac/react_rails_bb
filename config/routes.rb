Rails.application.routes.draw do
  
  root 'events#index'

  

  namespace :api do
      namespace :v1 do
        resources :notes, only: [:index, :create, :destroy, :update]
      end
  end
  
  match '*path', to: 'events#index', via: :all
end
