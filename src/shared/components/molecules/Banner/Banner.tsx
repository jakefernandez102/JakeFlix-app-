import { useEffect, useState } from "react";
import { Movie } from "../../../types";
import "./Banner.css";
import { MovieList } from "../../../../modules/ui/components/MovieList/MovieList";
import Skeleton from "react-loading-skeleton";
export interface BannerProps {
  movies: Movie[] | undefined;
}

export const Banner = ({ movies }: BannerProps) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [backgroundImage, setBackgroundImage] = useState<
    Record<string, string>
  >({
    backdrop_path: `${baseURL}${movies![0].backdrop_path}`,
    title: movies![0].original_title,
    description: movies![0].overview,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      assignNewBackground();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const assignNewBackground = () => {
    const randomIndex = Math.floor(Math.random() * movies!.length);
    const newImage = {
      backdrop_path: `${baseURL}${movies![randomIndex].backdrop_path}`,
      title: movies![randomIndex].original_title,
      description: movies![randomIndex].overview,
    };
    setBackgroundImage(newImage);
  };
  if (!movies?.length)
    return <Skeleton className={"w-full"} count={1} height={711} />;

  return (
    <div
      className="relative flex h-[711px] w-full flex-col items-center justify-between overflow-x-hidden overflow-y-visible py-4 text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold">{""}</h1>
      <div className="flex h-[355px] w-full items-end justify-between">
        <div className="ml-10 flex flex-col">
          <img
            src="/img/JAKEFLIX/single-logo.png"
            alt="single logo"
            className="w-[2rem] rotate-30"
          />
          {movies.length && (
            <div className="flex max-w-[35%] flex-col gap-2">
              <p className="text-shadow text-start text-4xl font-bold">
                {backgroundImage.title || (
                  <Skeleton className={"w-full"} count={1} />
                )}
              </p>
              <p className="text-shadow w-full text-start text-zinc-200">
                {backgroundImage.description || (
                  <Skeleton className={"w-[400px]"} count={4} />
                )}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="no-scrollbar flex h-[500px] w-full items-end overflow-x-scroll overflow-y-visible">
        <MovieList movies={movies} isTopTen={false} />
      </div>
      <span className="absolute right-0 bottom-0 left-0 h-[400px] bg-linear-to-t from-[#141414] to-transparent"></span>
    </div>
  );
};
