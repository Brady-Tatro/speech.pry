Rails.application.routes.draw do

root "application#index"

  devise_for :users

  resource :newmedia
  resource :showmedia
  resource :indexmedia
  
  namespace :api do
    namespace :v1 do
      resources :comments, only: [:new, :create]
      resources :speeches, only: [:new, :create, :show, :index]
    end
  end
end
