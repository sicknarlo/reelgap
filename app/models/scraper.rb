require 'mechanize'
require 'open-uri'
require 'json'

class Scraper

  def scrape_top_250

    agent = Mechanize.new
    page = agent.get("http://www.imdb.com/chart/top")

    titles = page.search("td[@class='titleColumn']")

    titles.each do |t|

      title = t.children[1].text
      url = build_request(title)
      result = open(url)
      data = ""
      result.each do |line|
        data << line
      end
      data = JSON.parse(data)

      if data["Response"] == "True" && data["Metascore"].to_i > 0 && data["imdbRating"].to_f > 0

        movie = Movie.find_or_create_by(title: data["Title"],
                                        year: data["Year"].to_i,
                                        poster: data["Poster"],
                                        metascore: data["Metascore"],
                                        imdb_rating: data["imdbRating"].to_f,
                                        imdbID: data["imdbID"]
                                        )

        directors = data["Director"].split(", ")
        directors.each do |d|
          director = Director.find_or_create_by(name: d)
          MovieDirector.find_or_create_by(movie_id: movie.id,
                                          director_id: director.id)
        end

        actors = data["Actors"].split(", ")
        actors.each do |a|
          actor = Actor.find_or_create_by(name: a)
          MovieActor.find_or_create_by(movie_id: movie.id,
                                       actor_id: actor.id)
        end

        genres = data["Genre"].split(", ")
        genres.each do |g|
          genre = Genre.find_or_create_by(name: g)
          MovieGenre.find_or_create_by(movie_id: movie.id,
                                       genre_id: genre.id)
        end
      end

    end

  end

  def build_request(title)
    formatted_title = title.downcase.gsub(/[^a-z0-9\s]/i, '').split(" ").join("+")
    "http://www.omdbapi.com/?t=#{formatted_title}&y=&plot=short&r=json"
  end
end