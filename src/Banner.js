import React,{useState, useEffect} from 'react';
import axios from './axios';
import requests from './request';

function Banner() {
  const[movie, setMovie] =  useState([]);  

  useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          setMovie(request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
          ]);
      }
      fetchData();
  }, []);

  console.log(movie);

  return (
    <div>
      <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}",
        backgroundPosition: "center center"
    }}
    >
        <div className="banner__contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
        </div>
        <div className="banner__buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
      </header>
    </div>
  );
}

export default Banner;
