Rails.application.routes.draw do
  devise_for :admins
  root to: "homes#index"

  resources :about, only:[:index]
  resources :menu, only:[:index]
  resources :events, only:[:index]
  resources :contact, only:[:index]

end
