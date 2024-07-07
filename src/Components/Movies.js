import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("movies")) || [];
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  });

  function goAhead() {
    setPage(page + 1);
  }

  function goBack() {
    if (page) setPage(page - 1);
  }
  useEffect(
    function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=bea19eedb0e9d4ee700cbefa6325c29f&page=${page}`
        )
        .then((res) => {
          // console.table(res.data.results);
          setMovies(res.data.results);
        });
    },
    [page]
  );

  return (
    <>
      <div className="mb-8">
        <div
          className="mt-8 mb-8 font-bold text-3xl    
        text-center"
        >
          Trending Movies
        </div>
        {movies.length == 0 ? (
          <div className="flex justify-center">
            <Oval
              height="80"
              width="80"
              radius="9"
              color="red"
              secondaryColor="gray"
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {movies.map((movie) => (
              <div
                className={`bg-[url(https://www.themoviedb.org/t/p/original/${movie.backdrop_path})] 
                h-[25vh] w-[150px]
                md:h-[30vh] md:w-[250px]
                bg-cover bg-center
                flex items-end
                rounded-xl 
                m-4
                hover:scale-110
                ease-out duration-1000
                `}
              >
                <div className="bg-gray-900 w-full text-white text-center font-bold rounded-b-xl">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination pageProp={page} goAhead={goAhead} goBack={goBack} />
    </>
  );
}

export default Movies;
