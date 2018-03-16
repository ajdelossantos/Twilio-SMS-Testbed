Rails.application.routes.draw do
  resource :messages, only: [:reply] do
    collection do
      post 'reply'
    end
  end

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :messages, only: [:show, :index, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
