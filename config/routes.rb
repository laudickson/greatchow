Rails.application.routes.draw do
  devise_for :admins
  root to: "home#index"

  resources :about, only: :index
  resources :menu, only: :index
  resources :event, only: :index
  resources :contact, only: :index
  resources :reward, only: :index
  resources :portal, only: :index

end
