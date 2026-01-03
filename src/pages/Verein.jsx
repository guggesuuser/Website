import React from "react";
import logo from "../assets/logo/Guggesuuser_Logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { registerMitglieder } from "../data/mitglieder.js";
import MitgliederSlider from "../components/MitgliederSlider";
import { vorstand } from "../data/vorstand";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Verein() {
  return (
    <>
      <section id="vereinsInfo" className="py-16 bg-ter text-qui">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-sfont text-center mb-12">
            Wer sind Wir
          </h1>

          <img
            src={logo}
            alt="Logo"
            className="float-right ml-4 mb-6 max-w-[40%] sm:max-w-[30%] md:max-w-[25%] rounded drop-shadow-custom-lg"
          />

          <p className="mb-6 text-base sm:text-xl">
            Wir sind eine spassige, mega tolle, hüpfige, stimmungsmachende und
            einfach lustige Truppe mit dem gemeinsamen Interesse an Musik,
            Fasnacht und dem geselligem Beisammensein. Was uns ausmacht? Ganz
            klar: eine bunte Truppe von "ännig" spassigen, geselligen Leuten,
            die alle die gleiche Leidenschaft teilen – die Liebe zur Fasnacht
            und zur Musik!
          </p>

          <p className="mt-4 text-base sm:text-xl font-semibold">Gründung</p>
          <p className="mt-2 mb-8 text-base sm:text-xl">1981 in Berneck.</p>

          <p className="mt-4 text-base sm:text-xl font-semibold">Auftritte</p>
          <p className="mt-2 mb-8 text-base sm:text-xl">
            Wir spielen jedes Jahr an diversen Maskenbällen, Guggenpartys und
            Fasnachtsumzügen von Wil bis Sargans. Wir lieben die ausgelassene
            Fasnachtsstimmung hier im Rheintal. Trotzdem entdecken wir immer
            wieder gerne Neues und verlassen den Kanton St. Gallen des Öfteren
            auch über die Landesgrenze nach Deutschland und Österreich.
          </p>

          <p className="mt-4 text-base sm:text-xl font-semibold">
            Eigene Anlässe
          </p>
          <p className="mt-2 mb-8 text-base sm:text-xl">
            Den offiziellen Fasnachtsbeginn am 11.11. feiern wir mit einem
            kleinen Platzkonzert auf der Rathaustreppe in Berneck. Unser
            Highlight ist das jährliche Guggemonster „Karneval zu Bernang“. Der
            wunderschöne Dorfkern von Berneck verwandelt sich an diesem Abend in
            einen heiteren Festplatz, an dem bis in die frühen Morgenstunden
            gefeiert wird. An der Dorfkilbi Berneck sind wir mit unserer
            Guggebeiz ebenfalls vertreten.
          </p>
        </div>
      </section>

      <section id="vorstand" className="py-16 text-textd bg-hui">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold font-sfont text-center mb-16">
            Vorstand
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {vorstand.map(({ funktion, name, bild, alt }, i) => (
              <div
                key={i}
                className="w-60 h-96 bg-qua rounded-lg drop-shadow-custom-lg p-1 text-center flex flex-col items-center"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${bild}`} // <- BASE_URL hinzufügen
                  alt={alt}
                  className="w-full h-64 object-cover mb-8 rounded-md"
                />
                <p className="text-lg font-semibold mb-1">{funktion}</p>
                <p className="text-base">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mitglieder" className="py-16 text-textd bg-ter">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h3 className="text-4xl sm:text-5xl font-bold font-sfont text-center mb-16">
            Mitglieder
          </h3>

          {registerMitglieder.map((gruppe, i) => (
            <MitgliederSlider
              key={i}
              instrument={gruppe.instrument}
              mitglieder={gruppe.mitglieder}
              settings={settings}
            />
          ))}
        </div>
      </section>
    </>
  );
}
