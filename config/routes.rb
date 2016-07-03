Rails.application.routes.draw do
  devise_for :admins
  root to: "homes#index"

  resources :abouts, only: :index
  resources :menus, only: :index
  resources :events, only: :index
  resources :contacts, only: [:index, :new, :create]
  resources :rewards, only: :index
  resources :portals, only: :index
  resources :press, only: :index

  match '/contacts', to: 'contacts#new', via: 'get', :as => :contact

  authenticate :admin do
    resources :events, only: [:new, :create, :update, :edit, :destroy]
  end
end
