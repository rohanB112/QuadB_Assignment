import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ info }) => {
  const { show } = info;
  const { image, name, rating, externals, genres, language, status } = show;
  const { imdb } = externals;

  console.log(info);

  return (
    <Link to={"/movies/info?imdb=" + imdb}>
      <div className="border border-black w-[254px] h-[432px] my-4 p-4 ml-12">
        <img
          className="w-[222px] h-[310px] mb-2"
          src={image?.original}
          alt="img"
        />
        <p className="mx-1 px-1 font-semibold">{name}</p>

        <div className="flex flex-wrap">
          <div className="text-sm bg-white text-black rounded-sm mx-1 my-2 px-1">
            {rating?.average}/10.0 ⭐
          </div>
          {genres.map((genre) => {
            return (
              <div className="text-sm bg-green-400 rounded-sm mx-1 my-2 px-1">
                {genre}
              </div>
            );
          })}
          <div className="text-sm text-black bg-[#E3B5CD] rounded-sm mx-1 my-2 px-1">
            {language}
          </div>
          <div className="text-sm text-black bg-[#F9D791] rounded-sm mx-1 my-2 px-1">
            {status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
