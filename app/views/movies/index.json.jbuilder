json.array!(@movies) do |movie|
  json.extract! movie, :id, :title, :year, :poster, :metascore, :imdb_rating, :imdbID
  json.url movie_url(movie, format: :json)
end
