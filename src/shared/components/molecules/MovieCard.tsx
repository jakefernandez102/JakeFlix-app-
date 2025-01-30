import { FaCirclePlay, FaCirclePlus, FaThumbsUp } from "react-icons/fa6";
import { Movie } from "../../../types";
import Skeleton from "react-loading-skeleton";

export type MovieProps = {
  movie: Movie;
  zIndex: number;
  hasGenre?: boolean;
  genre?: string;
};
export const MovieCard = ({ movie, zIndex, genre, hasGenre }: MovieProps) => {
  if (!movie.id)
    return <Skeleton className="flex-1" width={200} height={200} />;
  return (
    <div
      className={`group col-span relative h-full w-[10rem] bg-zinc-900 hover:z-[100]`}
      style={{ zIndex }}
    >
      <img
        loading={"lazy"}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        className="duration object-fit h-full w-full cursor-pointer rounded-md shadow-xl transition delay-100 group-hover:opacity-90 sm:group-hover:opacity-0"
      />
      <div className="invisible absolute top-0 w-full scale-0 opacity-0 transition delay-100 duration-200 group-hover:-translate-y-[6.5vw] group-hover:translate-x-[1vw] group-hover:scale-120 group-hover:opacity-100 group-hover:shadow-xl sm:visible">
        <img
          loading={"lazy"}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          className="duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition"
        />
        <div className="shadow-ms absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 transition">
          <div className="flex flex-row items-center gap-3">
            <div className="flex h-full cursor-pointer justify-center rounded-full bg-white transition hover:bg-neutral-100">
              <FaCirclePlay className="text-2xl text-black" />
            </div>
            <div className="flex h-full cursor-pointer justify-center rounded-full bg-white transition hover:bg-neutral-300">
              <FaCirclePlus className="text-2xl text-black" />
            </div>
            <div className="flex h-full cursor-pointer justify-center rounded-full bg-black transition hover:bg-neutral-300">
              <FaThumbsUp className="p-1 text-xl text-white" />
            </div>
          </div>
          <p className="mt-4 text-start font-semibold text-green-400">
            Release{" "}
            <span className="text-white">
              {new Date(movie.release_date).getFullYear()}
            </span>
          </p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-[10px] text-white lg:text-sm">2h 30m</p>
            {hasGenre && (
              <p className="text-[10px] text-white lg:text-sm">{genre}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
