Rails.application.routes.draw do

root "application#index"

  devise_for :users

  resource :newmedia
  resource :indexmedia
  resource :targetspeech

  namespace :api do
    namespace :v1 do
      resources :comments, only: [:new, :create]
      resources :speeches, only: [:new, :create, :show, :index]
      resources :users, only: [:show]
    end
  end
end
