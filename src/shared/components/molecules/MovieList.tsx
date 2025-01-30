import { Movie } from "../../../types";
import { MovieCard } from "./MovieCard";

export interface MovieListProps {
  movies: Movie[] | undefined;
  hasTitle?: boolean;
  title?: string;
  hasGenre?: boolean;
  genre?: string;
}
export const MovieList = ({
  movies,
  hasTitle = false,
  title,
  hasGenre = false,
  genre,
}: MovieListProps) => {
  let zIdx = 100;

  return (
    <div className="mt-4 space-y-8 px-2 md:px-12">
      <div className="">
        {hasTitle && (
          <p className="text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
            {title}
          </p>
        )}
        <div className="flex gap-2 overflow-x-visible">
          {movies?.map((movie) => {
            zIdx--;
            return (
              <MovieCard
                key={movie.id}
                hasGenre={hasGenre}
                genre={genre}
                zIndex={zIdx}
                movie={movie}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
