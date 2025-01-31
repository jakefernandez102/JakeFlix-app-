import { isAxiosError } from "axios";
import { axiosMDBClient } from "../../shared/config/axios-mdb-client";
import { Movie } from "../../shared/types";

export const getPlayingNowMovies = async () => {
  try {
    const { data } = await axiosMDBClient(
      "/movie/now_playing?language=en-US&page=1",
    );
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.message);
    }
    console.log(error);
    throw new Error("Error getting playing now movies");
  }
};

export const getTopRatedMovies = async () => {
  try {
    const { data: genres } = await axiosMDBClient(
      "/movie/top_rated?language=en-US&page=1",
    );
    return genres;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting top rated movies");
  }
};

const getMovieGenres = async () => {
  try {
    const { data: genres } = await axiosMDBClient(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
    );
    return genres;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.message);
    }
  }
};

const getMoviesByGenre = async (genreId: number) => {
  try {
    const { data: movies } = await axiosMDBClient(
      `https://api.themoviedb.org/3/discover/movie?api_key=6f029b809f60c23872b6bd9bd392ab08&with_genres=${genreId}`,
    );
    return movies;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.message);
    }
  }
};

export interface MoviesByGenreProps {
  genre: string;
  movies: Movie[];
}

export const createMoviesByGenre = async () => {
  try {
    const genres = await getMovieGenres();
    const moviesByGenre: MoviesByGenreProps[] = await Promise.all(
      genres.genres.map(async (genre: { id: number; name: string }) => {
        const movies = await getMoviesByGenre(genre.id);

        const moviesWithGenre = movies.results.map((movie: Movie) => {
          return {
            ...movie,
            genre: genre.name,
          };
        });

        return {
          genre: genre.name,
          movies: moviesWithGenre,
        };
      }),
    );
    return moviesByGenre;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.message);
    } else {
      console.log(error);
      throw new Error("Error getting movies by genre");
    }
  }
};

export const getMovieCast = async (movieId: number) => {
  try {
    const { data: cast } = await axiosMDBClient(`/movie/${movieId}/credits`);
    return cast;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data.error);
      throw new Error(error.message);
    }
    console.log(error);
  }
};
