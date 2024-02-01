import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./Header";
import TicketBook from "./TicketBook";

const MoviePage = () => {
  const [searchParams] = useSearchParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  const { name, rating, image, summary } = movieInfo || {};

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.tvmaze.com/lookup/shows?imdb=" + searchParams.get("imdb")
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setMovieInfo(jsonData);
  };

  const toggleShowBooking = () => {
    setShowBooking(true);
  };
  return (
    <>
      <Header />
      <div className="flex p-12 ">
        <div>
          <img className="w-52 h-72 mt-8" src={image?.original} alt="img" />
        </div>
        <div className=" w-2/3 mx-8 p-4 border border-black">
          <div>
            <p className="text-3xl font-bold">{name}</p>
            <div className="bg-white w-20 px-2 py-1 text-xs rounded-sm my-3 text-black">
              <p> {rating?.average}/10.0 ⭐</p>
            </div>
            {summary}
          </div>
          {!showBooking && (
            <button
              onClick={toggleShowBooking}
              className="bg-green-500 my-5 px-3 py-2 rounded-md"
            >
              Book Ticket
            </button>
          )}
        </div>
        {showBooking && <TicketBook movieName={name} />}
      </div>
    </>
  );
};

export default MoviePage;
