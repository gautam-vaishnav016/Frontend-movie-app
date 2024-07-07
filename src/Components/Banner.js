import React,{useState,useEffect} from 'react'
import Image from "../bnr2.jpg"
import axios from 'axios';
function Banner() {

  const [movie, setMovie] = useState({});
    useEffect(function() {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=bea19eedb0e9d4ee700cbefa6325c29f&page=1").then((res) => {
           console.table(res.data.results);
           setMovie(res.data.results[0]);
       })
        
      },[]);
  
  return (
    <div className={`bg-[url(https://www.themoviedb.org/t/p/original/${movie.backdrop_path})] h-[50vh] md:h-[70vh]
      bg-cover bg-center
      flex items-end 
    `}>
        <div className='text-xl md:text-3xl text-white justify-center
            p-4
            bg-gray-900 bg-opacity-50
            w-full 
            flex justify-center
        '>
        {movie.title}
        </div>
    </div>
  )
}

export default Banner