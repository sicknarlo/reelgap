class Movie < ActiveRecord::Base
  has_many :directors, through: :movie_directors
  has_many :movie_directors
  has_many :actors, through: :movie_actors
  has_many :movie_actors
  has_many :genres, through: :movie_genres
  has_many :movie_genres

  def self.critic_favs
    Movie.order(metascore: :desc)[0..9]
  end

  def self.viewer_favs
    Movie.order(imdb_rating: :desc)[0..9]
  end

  def difference
    self.metascore - (self.imdb_rating * 10)
  end

  def self.viewer_skew
    Movie.all.to_a.sort_by(&:difference)[0..9]
  end

  def self.critic_skew
    Movie.all.to_a.sort_by(&:difference)[-10..-1]
  end

end
