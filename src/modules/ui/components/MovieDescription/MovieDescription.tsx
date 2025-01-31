import Skeleton from "react-loading-skeleton";
import { Cast } from "../../../../shared/types/cast";
import { FaPlay, FaThumbsUp } from "react-icons/fa6";

export interface MovieDescriptionProps {
  title: string;
  description: string;
  rating: number;
  releaseDate: string;
  genre: string;
  cast: Cast;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}
export const MovieDescription = ({
  cast,
  description,
  genre,
  open,
  setOpen,
  rating,
  releaseDate,
  title,
  image,
}: MovieDescriptionProps) => {
  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } fixed inset-0 z-[1000] items-center justify-center bg-transparent`}
    >
      <div className="bg-form absolute top-0 right-0 bottom-0 left-0"></div>
      <div className="relative h-[80%] w-[90%] max-w-[900px] overflow-hidden overflow-y-auto rounded-lg bg-black shadow-lg">
        <div className="relative h-[70%] w-full">
          <p
            className="absolute top-4 right-4 z-[10000] cursor-pointer text-4xl font-black text-white"
            onClick={() => setOpen(!open)}
          >
            x
          </p>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-[0px_-100px]"
          />
          <div className="absolute right-0 bottom-0 left-0 h-150 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-4 left-6 flex flex-col gap-2">
            <h1 className="text-4xl font-black text-white">{title}</h1>
            <div className="flex w-[35%] justify-between gap-5 rounded-full bg-gray-900 p-1 text-black">
              <div className="flex items-center gap-2 rounded-md bg-white px-2">
                <FaPlay />
                <p>Play</p>
              </div>
              <div className="rounded-full bg-white p-2">
                <FaThumbsUp />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 p-6">
          <div className="flex flex-1 flex-col">
            <p className="text-green-600">
              Release <span className="text-white">{releaseDate}</span>
            </p>
            <p className="overflow-y-scroll text-white">{description}</p>
            <p className="text-green-500">
              Rating: <span className="text-white">{rating}</span>
            </p>
            <p className="text-green-500">
              Genre: <span className="text-white">{genre}</span>
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full">
              <h3 className="text-white">Cast</h3>
              <div className="flex flex-wrap">
                {cast?.cast.slice(0, 10).map((actor, index) => (
                  <div key={index}>
                    <p className="text-white">
                      {actor.name || (
                        <Skeleton containerClassName={"flex-1"} count={4} />
                      )}
                      ,{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
