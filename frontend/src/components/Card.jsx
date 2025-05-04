import React from "react";
import { Link } from "react-router-dom";

const Card = ({ src, title }) => {
  return (
    <Link
      to={`/${title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
      className="no-underline"
    >
      <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all group">
        {/* Background Image */}
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text at Bottom */}
        <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default Card;
