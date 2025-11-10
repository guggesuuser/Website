import React from "react";
import Slider from "react-slick";

export default function MitgliederSlider({ instrument, mitglieder, settings }) {
  return (
    <div className="mb-24">
      <p className="text-2xl sm:text-4xl pl-12 font-semibold mb-8">
        {instrument}
      </p>

      <Slider
        {...settings}
        className="w-full max-w-full mx-auto overflow-hidden pl-12 pr-12"
      >
        {mitglieder.map(({ name, bild, hoverBild, alt }, i) => (
          <div key={i} className="px-2 focus:outline-none">
            <div
              className="w-60 h-96 bg-qua rounded-lg drop-shadow-custom-lg p-1 text-center flex flex-col items-center mx-auto
  transition-transform duration-300 ease-in-out"
            >
              <div className="relative w-full h-72 mb-7 rounded-md overflow-hidden">
                <img
                  src={bild}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-100 hover:opacity-0"
                />
                <img
                  src={hoverBild}
                  alt={`${alt} (hover)`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-0 hover:opacity-100"
                />
              </div>

              <p className="text-lg font-semibold">{name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
