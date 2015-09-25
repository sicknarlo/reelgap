Rails.application.routes.draw do
  root to: "movies#index"
  resources :movies
  # scope :api do
  #   scope :v1 do
  #   end
  # end
end