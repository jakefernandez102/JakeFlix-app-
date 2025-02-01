import { useState } from "react";

import { Banner } from "../../../../shared/components";
import { MovieList } from "../../components/MovieList/MovieList";
import { HomeTemplate } from "../../../../shared/template/HomeTemplate";
import { Movie } from "../../../../shared/types";
import { MovieListTemplate } from "../../../../shared/template/MovieListTemplate";
import { MovieDescription } from "../../components/MovieDescription/MovieDescription";
import { useMovie } from "../../../../shared/hooks/useMovie";

const Home = () => {
  const [openMovieDescription, setOpenMovieDescription] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { castQuery, moviesByGenreQuery, moviesPlayingNowQuery, setMovieID } =
    useMovie();

  const handleMovieSelect = (id: number, movie: Movie) => {
    console.log("Movie selected", id);
    console.log("Movie selected", movie);
    setMovieID(id);
    setSelectedMovie(movie);
    setOpenMovieDescription(true);
  };

  if (moviesPlayingNowQuery.isLoading) return <HomeTemplate />;
  return (
    <main>
      {!moviesPlayingNowQuery.isLoading && (
        <Banner movies={moviesPlayingNowQuery.data?.results} />
      )}

      {moviesByGenreQuery.isLoading && <MovieListTemplate />}

      {!moviesByGenreQuery.isLoading &&
        moviesByGenreQuery.data &&
        moviesByGenreQuery.data.map((genre) => {
          return (
            <MovieList
              genre={genre.genre}
              key={genre.genre}
              movies={genre.movies}
              onSelectMovie={handleMovieSelect} // Pass handler down
            />
          );
        })}

      {selectedMovie && (
        <MovieDescription
          cast={castQuery.data}
          open={openMovieDescription}
          setOpen={setOpenMovieDescription}
          releaseDate={new Date(selectedMovie?.release_date)
            .getFullYear()
            .toString()}
          rating={selectedMovie?.vote_average}
          title={selectedMovie?.title}
          description={selectedMovie?.overview}
          genre={selectedMovie?.genre || ""}
          image={`https://image.tmdb.org/t/p/original/${selectedMovie?.poster_path}`}
        />
      )}
    </main>
  );
};

export default Home;
