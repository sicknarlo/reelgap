class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :poster
      t.integer :metascore
      t.float :imdb_rating
      t.string :imdbID

      t.timestamps null: false
    end
  end
end
