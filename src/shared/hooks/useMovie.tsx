import { useQuery } from "@tanstack/react-query";
import { Movies } from "../types";
import {
  createMoviesByGenre,
  getMovieCast,
  getPlayingNowMovies,
} from "../../api";
import { useState } from "react";

export const useMovie = () => {
  const [movieID, setMovieID] = useState<number | undefined>();

  const moviesPlayingNowQuery = useQuery<Movies | undefined>({
    queryKey: ["moviesPlayingNow"],
    queryFn: getPlayingNowMovies,
  });

  const moviesByGenreQuery = useQuery({
    queryKey: ["genres"],
    queryFn: createMoviesByGenre,
  });

  const castQuery = useQuery({
    queryKey: ["cast", movieID],
    queryFn: () => getMovieCast(movieID!),
    enabled: !!movieID, // Only fetch when movieID is set
  });

  return {
    moviesPlayingNowQuery,
    moviesByGenreQuery,
    castQuery,
    setMovieID,
  };
};
