class Actor < ActiveRecord::Base
  has_many :movies, through: :movie_actors
  has_many :movie_actors

end
