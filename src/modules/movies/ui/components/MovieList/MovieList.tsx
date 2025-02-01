import { Carousel } from "../../../../../shared/components/molecules/Carousel/Carousel";
import { Movie } from "../../../../../shared/types";

export interface MovieListProps {
  movies: Movie[] | undefined;
  isTopTen?: boolean;
  genre?: string;
  onSelectMovie?: (id: number, movie: Movie) => void; // Pass down function
}
export const MovieList = ({
  movies,
  isTopTen = false,
  genre,
  onSelectMovie,
}: MovieListProps) => {
  return (
    <div className={"mt-5 flex flex-col justify-end px-5"}>
      {genre && <h3 className="text-2xl text-white">{genre}</h3>}
      <div className="no-scrollbar flex h-[300px] items-end overflow-x-auto overflow-y-visible">
        <div className="mt-4 space-y-8 px-2 md:px-12">
          <div className="">
            {isTopTen ? (
              <Carousel
                data={movies!}
                card="top-10"
                onSelectMovie={onSelectMovie}
              />
            ) : (
              <Carousel
                data={movies!}
                card="default"
                onSelectMovie={onSelectMovie}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
