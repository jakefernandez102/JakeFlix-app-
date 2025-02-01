import { MovieCard } from "../../../../modules/movies/ui/components/MovieCard/MovieCard";
import { Movie } from "../../../types";
import { Top10MovieCard } from "../../../../modules/movies/ui";

export type CardType = "top-10" | "default";
export interface CarouselProps {
  data?: Movie[];
  card?: CardType;
  onSelectMovie?: (id: number, movie: Movie) => void; // Pass down function
}
export const Carousel = ({
  data,
  card = "default",
  onSelectMovie,
}: CarouselProps) => {
  let zIdx = 100;
  return (
    <div
      className={`flex ${card === "top-10" ? "gap-15" : "gap-4"} overflow-x-visible`}
    >
      {data?.map((item: Movie) => {
        zIdx--;
        return card === "top-10" ? (
          <Top10MovieCard
            key={item?.id}
            movie={item}
            moviePosition={data?.indexOf(item) + 1}
          />
        ) : (
          <MovieCard
            hasGenre={!!item.genre}
            genre={item.genre}
            key={item.id}
            zIndex={zIdx}
            movie={item}
            onSelectMovie={onSelectMovie}
          />
        );
      })}
    </div>
  );
};
