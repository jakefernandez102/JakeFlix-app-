import { Button, Footer, Form, MovieList } from "../../../../shared/components";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Popcorn } from "../../Icons/Popcorn";
import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../../../api/movie/movie";
import { Movie } from "../../../../shared/types";
import { MovieListTemplate } from "../../../../shared/template/MovieListTemplate";
import { Tv } from "../../Icons";
import { Download } from "../../Icons/Download";
import { Enjoy } from "../../Icons/Enjoy";
import { Profiles } from "../../Icons/Profiles";
import { Advertisement } from "../../components/Advertisement";
import { register } from "../../../../api/auth/auth";

const ADVERTISEMENT = [
  {
    title: "Enjoy on Your TV",
    description:
      "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <Tv />,
  },
  {
    title: "Download Your Series to Watch Offline",
    description:
      "Save your favorite titles and always have something to watch.",
    icon: <Download />,
  },
  {
    title: "Watch Anywhere",
    description:
      "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: <Enjoy />,
  },
  {
    title: "Create Profiles for Kids",
    description:
      "Surround the little ones with their favorite characters, ad-free.",
    icon: <Profiles />,
  },
];

export const Register = () => {
  const [top10Movies, setTop10Movies] = useState<Movie[]>([]);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { data: topRatedMovies, isLoading } = useQuery({
    queryKey: ["TopRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  const handleRegister = async ({ email }: Record<string, string>) => {
    try {
      console.log(email);
      const data = await register({
        email,
        password: "Password",
        name: email.split("@")[0],
        authenticated: false,
        profiles: [],
      });
      toast.success("User created successfully your password is: Password", {
        position: "top-center",
      });
      if (!!data && audioRef.current) {
        audioRef.current.play();
      }
      setTimeout(() => {
        navigate("/auth/login");
      }, 3500);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`, {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (isLoading) return;
    if (topRatedMovies && topRatedMovies.results) {
      sortMoviesByPopularity(topRatedMovies.results);
    }
  }, [isLoading]);

  const sortMoviesByPopularity = (movies: Movie[]) => {
    const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);
    setTop10Movies(sortedMovies.slice(0, 10));
  };

  return (
    <>
      <div className="relative">
        <div className="h-screen bg-[url('/img/jakeflix-login-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 top-0 bottom-0 max-h-[100vh] bg-radial from-transparent from-0% to-black to-80%"></div>
          <div className="absolute z-10 w-full">
            <div className="h-[10rem] w-full overflow-hidden">
              <Link className={""} to={"/auth/login"}>
                <img
                  src="/img/JAKEFLIX/logo.png"
                  className="ml-10 w-40"
                  alt="Jakeflix"
                />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="flex h-[70%] w-[90%] flex-col items-center justify-center gap-10 px-10 py-10 text-white sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[50%]">
                <h1 className="self-baseline text-center text-xl font-black md:text-6xl">
                  Unlimited movies and series and much more!
                </h1>
                <p className="text-center text-lg font-bold md:text-3xl">
                  Starting at $7.99. Cancel anytime.
                </p>
                <p className="text-md text-center md:text-2xl">
                  Want to watch Jakeflix now? Enter your email to create one or
                  restart your Jakeflix membership.
                </p>
                <Form
                  inLine={true}
                  fields={[
                    {
                      name: "email",
                      type: "email",
                      placeholder: "Email",
                      required: true,
                    },
                  ]}
                  initialValues={{
                    email: "",
                  }}
                  mainButtontext="Start"
                  onSubmit={(data) => handleRegister(data)}
                />
              </div>
            </div>
          </div>

          <audio ref={audioRef} src="/sound/netflix-sound.mp3"></audio>
          <ToastContainer />
          <div className="default-ltr-cache-dulgtd">
            <div className="curve-container">
              <div className="default-ltr-cache-1f97ztc"></div>
            </div>
            <div className="default-ltr-cache-jtcpfi"></div>
          </div>
        </div>
      </div>
      <section className="flex h-full w-full flex-col justify-center bg-black text-white">
        <div className="flex w-full flex-col items-center justify-center px-10 transition duration-300 hover:translate-y-3 hover:scale-105 md:flex-row">
          <div className="self-center">
            <Popcorn />
          </div>
          <div className="flex h-[80px] w-full items-center justify-between rounded-lg bg-linear-to-br from-[#1C1126] to-[#111330] px-10 transition duration-300 hover:bg-linear-to-r hover:from-[#361853] hover:to-[#121441] sm:w-[70%]">
            <div className={"flex flex-col"}>
              <p className="text-sm lg:text-xl">
                Everything you love on Jakeflix for just $7.99.
              </p>
              <p className="text-xs lg:text-lg">
                Take advantage of our most affordable option, the ad-supported
                plan.
              </p>
            </div>
            <Button
              label={"More Info"}
              className={
                "rounded-md bg-slate-600 px-2 py-1 font-bold text-white"
              }
              type={"button"}
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
      <section className="m-auto flex w-full items-center justify-center bg-black">
        {isLoading && <MovieListTemplate />}
        {!isLoading && topRatedMovies && topRatedMovies.results && (
          <div className="no-scrollbar flex h-[375px] w-[90%] items-end overflow-x-scroll overflow-y-visible">
            <MovieList movies={top10Movies as Movie[]} isTopTen={true} />
          </div>
        )}
      </section>
      <section className="flex justify-center bg-black">
        <div className="flex w-[80%] flex-col items-center justify-center gap-10 py-10">
          <h3 className={"self-start text-2xl font-bold text-white"}>
            Reasons to join
          </h3>
          <div className="flex flex-wrap gap-25 md:gap-2">
            {ADVERTISEMENT.map((item) => (
              <Advertisement
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};
