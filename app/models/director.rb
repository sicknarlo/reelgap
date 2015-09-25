class Director < ActiveRecord::Base
  has_many :movies, through: :movie_directors
  has_many :movie_directors

end
