import { Banner } from "../../../../../shared/components";
import { MovieList } from "../../components/MovieList/MovieList";
import { useQuery } from "@tanstack/react-query";
import {
  createMoviesByGenre,
  getMovieCast,
  getPlayingNowMovies,
} from "../../../../../api/movie/movie";
import { HomeTemplate } from "../../../../../shared/template/HomeTemplate";
import { Movie, Movies } from "../../../../../shared/types";
import { MovieListTemplate } from "../../../../../shared/template/MovieListTemplate";
import { MovieDescription } from "../../components/MovieDescription/MovieDescription";
import { useState } from "react";

const Home = () => {
  const [openMovieDescription, setOpenMovieDescription] = useState(false);
  const [movieID, setMovieID] = useState<number | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { data: moviesPlayingNow, isLoading } = useQuery<Movies | undefined>({
    queryKey: ["moviesPlayingNow"],
    queryFn: getPlayingNowMovies,
  });

  const { data: moviesByGenre, isLoading: isMoviesByGenreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: createMoviesByGenre,
  });

  const { data: cast } = useQuery({
    queryKey: ["cast", movieID], // Unique query key for each movie
    queryFn: () => getMovieCast(movieID!), // Fetch cast for selected movie
    enabled: !!movieID, // Only fetch when movieID is set
  });

  const handleMovieSelect = (id: number, movie: Movie) => {
    console.log("Movie selected", id);
    console.log("Movie selected", movie);
    setMovieID(id);
    setSelectedMovie(movie);
    setOpenMovieDescription(true);
  };

  if (isLoading) return <HomeTemplate />;
  return (
    <main>
      {!isLoading && <Banner movies={moviesPlayingNow?.results} />}
      {isMoviesByGenreLoading && <MovieListTemplate />}
      {!isMoviesByGenreLoading &&
        moviesByGenre &&
        moviesByGenre.map((genre) => {
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
          cast={cast}
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
