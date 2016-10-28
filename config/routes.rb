Rails.application.routes.draw do

root "application#index"

  devise_for :users

  resource :newmedia
  resource :indexmedia
  resource :targetspeech
  resource :userspeeches

  namespace :api do
    namespace :v1 do
      resources :comments, only: [:new, :create]
      resources :speeches, only: [:new, :create, :show, :index]
      resources :members, only: [:show, :index]
      devise_for :users, controllers: { registations: 'api/v1/registations' }
    end
  end
end
