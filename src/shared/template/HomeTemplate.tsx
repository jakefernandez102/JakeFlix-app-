import React from "react";
import Skeleton from "react-loading-skeleton";
import { MovieListTemplate } from "./MovieListTemplate";

export const HomeTemplate = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <Skeleton containerClassName={"flex-1"} width={"100%"} height={711} />
      <div className="mt-2 flex flex-col gap-2">
        <div className="relative">
          <Skeleton
            containerClassName={"flex-1"}
            width={300}
            height={50}
            count={1}
          />
          <div className="absolute bottom-30 left-10 flex gap-2">
            <MovieListTemplate />
          </div>
        </div>
        <div className="flex gap-2">
          <MovieListTemplate />
        </div>
      </div>
    </div>
  );
};
