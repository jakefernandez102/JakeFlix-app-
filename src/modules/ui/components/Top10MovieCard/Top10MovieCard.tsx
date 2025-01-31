import { Movie } from "../../../../shared/types";

export interface Top10MovieCardProps {
  movie: Movie;
  moviePosition: number;
}
export const Top10MovieCard = ({
  movie,
  moviePosition,
}: Top10MovieCardProps) => {
  return (
    <div className="w-full">
      <div className="relative h-[300px] w-[200px] transition duration-300 hover:scale-110">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="w-full">
          <img
            src="/img/JAKEFLIX/single-logo.png"
            alt="single logo"
            className="absolute top-0 left-0 w-[12%]"
          />

          <img
            src={`/img/1-10/${moviePosition}.png`}
            alt={"movie position"}
            className={"absolute bottom-15 -left-8 z-10 w-[30%]"}
          />
        </div>
      </div>
    </div>
  );
};
