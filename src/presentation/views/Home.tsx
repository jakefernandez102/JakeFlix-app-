import { Banner } from "../../shared/components";
import { MovieList } from "../../shared/components/molecules/MovieList";
import { useQuery } from "@tanstack/react-query";
import {
  createMoviesByGenre,
  getPlayingNowMovies,
} from "../../api/Movie/movie.api";
import { HomeTemplate } from "../template/HomeTemplate";
import { Movies } from "../../types";
import { MovieListTemplate } from "../template/MovieListTemplate";

const Home = () => {
  const { data: moviesPlayingNow, isLoading } = useQuery<Movies | undefined>({
    queryKey: ["moviesPlayingNow"],
    queryFn: getPlayingNowMovies,
  });

  const { data: moviesByGenre, isLoading: isMoviesByGenreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: createMoviesByGenre,
  });

  console.log({ moviesByGenre });

  if (isLoading) return <HomeTemplate />;

  return (
    <main>
      {!isLoading && <Banner movies={moviesPlayingNow?.results} />}
      {isMoviesByGenreLoading && <MovieListTemplate />}
      {!isMoviesByGenreLoading &&
        moviesByGenre &&
        moviesByGenre.map((genre) => (
          <div
            key={genre.genre}
            className="no-scrollbar flex h-[375px] items-end overflow-x-auto overflow-y-visible"
          >
            <MovieList
              hasGenre={true}
              genre={genre.genre}
              key={genre.genre}
              movies={genre.movies}
              hasTitle
              title={genre.genre}
            />
          </div>
        ))}
    </main>
  );
};

export default Home;
