import React, { useState, useEffect } from "react";
import bgImage from "../assets/logo/Guggesuuser_Viking.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { termine } from "../data/termine";
import { kontakte } from "../data/kontakte";
import { HashLink } from "react-router-hash-link";

export default function MyComponent() {
  const clipPaths = {
    mobile: `path('M203.92,133.76c-5.13,5.32-9.91,10.86-14.99,16.27-3.18,3.38-6.63,6.56-9.74,9.99-3.64-2.04-7.48-4.84-11.32-6.58-39.21-17.78-84.12-11.07-113.87,16.44-1.66,1.54-4.43,5.98-6.97,5.32l-19.68-11.76c-1.66-1.76-15.65-9.14-15.99-10.15-.17-.5.72-1.88,1.11-2.24,11.41-10.41,18.36-22.25,21.07-36.4,3.79-19.79-4.77-42.59-19.6-58.41-3.48-3.71-7.79-6.65-11.88-9.92-.63-.5-1.52-.27-1.25-1.28L31.09,13.85c29.05,18.58,71.41,20.13,102.81,3.98,8.37-4.31,13.05-8.71,19.65-14.62.32-.29,2.89-2.28,3.08-2.36.64-.25,2.75.46,3.47.78,7.07,3.14,16.97,10.75,23.84,14.97,3.52,2.16,7.57,4.05,10.64,6.55-2.3,2.99-4.68,5.93-6.96,8.94-10.16,13.39-15.11,28.57-13.79,44.86,1.02,12.5,5.11,21.58,12.14,32.46.48.74,1.86,2.08,2.09,2.66.21.55-.28,1.04-.13,1.26.11.16,2.7,1.95,3.24,2.52,4.12,5.45,10.43,9.49,16.05,13.83.17.5-2.69,3.48-3.29,4.1')`,
    tablet: `path('M250.98,170.24c-6.32,6.77-12.2,13.82-18.45,20.7-3.91,4.31-8.16,8.35-11.99,12.71-4.48-2.59-9.21-6.16-13.93-8.38-48.26-22.63-103.54-14.09-140.15,20.92-2.05,1.95-5.45,7.61-8.58,6.77l-24.22-14.97c-2.04-2.24-19.26-11.63-19.68-12.92-.21-.63.89-2.4,1.37-2.85,14.04-13.25,22.6-28.31,25.93-46.33,4.66-25.19-5.88-54.2-24.12-74.35-4.28-4.73-9.59-8.46-14.62-12.62-.77-.64-1.87-.34-1.54-1.63L38.26,17.63c35.75,23.65,87.89,25.62,126.53,5.06,10.3-5.48,16.06-11.08,24.18-18.61.4-.36,3.55-2.9,3.79-3,.79-.32,3.39.59,4.27.99,8.71,4,20.89,13.68,29.34,19.05,4.33,2.75,9.32,5.15,13.1,8.34-2.83,3.8-5.76,7.55-8.56,11.37-12.51,17.04-18.6,36.36-16.97,57.09,1.25,15.91,6.29,27.46,14.94,41.32.59.94,2.29,2.65,2.57,3.38.26.7-.35,1.32-.16,1.6.14.21,3.32,2.49,3.99,3.21,5.07,6.93,12.83,12.08,19.75,17.6.21.64-3.32,4.43-4.05,5.22')`,
    laptop: `path('M282.35,194.56c-7.1,7.73-13.72,15.79-20.75,23.66-4.4,4.92-9.18,9.55-13.48,14.53-5.04-2.96-10.36-7.04-15.68-9.57-54.29-25.86-116.48-16.1-157.67,23.91-2.3,2.23-6.13,8.69-9.65,7.73l-27.25-17.11c-2.3-2.56-21.67-13.29-22.14-14.77-.23-.72,1-2.74,1.54-3.26,15.8-15.15,25.43-32.36,29.18-52.95,5.24-28.78-6.61-61.94-27.13-84.97-4.82-5.4-10.79-9.67-16.45-14.43-.87-.73-2.1-.39-1.73-1.86L43.05,20.15c40.22,27.03,98.88,29.28,142.35,5.78,11.59-6.26,18.07-12.67,27.21-21.27.45-.42,4-3.32,4.26-3.43.89-.36,3.81.67,4.8,1.14,9.79,4.57,23.5,15.63,33,21.77,4.87,3.14,10.48,5.89,14.73,9.53-3.18,4.35-6.47,8.63-9.63,13-14.07,19.47-20.93,41.56-19.09,65.25,1.41,18.18,7.07,31.39,16.81,47.22.66,1.07,2.58,3.03,2.89,3.86.3.8-.39,1.51-.18,1.83.16.23,3.74,2.84,4.48,3.67,5.71,7.92,14.44,13.8,22.22,20.11.24.73-3.73,5.06-4.55,5.96')`,
    desktop: `path('M410.9,280.78c-10.31,11.16-19.92,22.79-30.13,34.15-6.38,7.1-13.33,13.77-19.58,20.97-7.32-4.28-15.04-10.16-22.76-13.81-78.82-37.32-169.09-23.24-228.89,34.5-3.34,3.22-8.9,12.55-14.01,11.16l-39.56-24.69c-3.34-3.69-31.46-19.18-32.15-21.31-.34-1.04,1.45-3.95,2.24-4.7,22.93-21.86,36.91-46.7,42.35-76.42,7.61-41.54-9.6-89.39-39.39-122.61-6.99-7.79-15.66-13.96-23.88-20.82-1.26-1.05-3.05-.56-2.52-2.69L63.49,29.08c58.39,39.01,143.54,42.25,206.65,8.35,16.83-9.04,26.24-18.28,39.5-30.69.65-.6,5.8-4.79,6.18-4.95,1.29-.52,5.54.97,6.98,1.64,14.22,6.6,34.11,22.56,47.91,31.42,7.07,4.54,15.22,8.5,21.39,13.75-4.62,6.27-9.4,12.46-13.98,18.76-20.43,28.1-30.38,59.98-27.72,94.16,2.04,26.24,10.27,45.3,24.4,68.14.96,1.55,3.75,4.37,4.2,5.58.77,1.22.46.76.77,1.22.23.34,4.4,5.53,5.48,6.71,8.28,11.43,20.95,19.92,32.25,29.02.34,1.05-5.42,7.31-6.61,8.6')`,
  };

  const [clipPathValue, setClipPathValue] = useState(clipPaths.laptop);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateClipPath = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setClipPathValue(clipPaths.mobile);
      } else if (width < 768) {
        setClipPathValue(clipPaths.tablet);
      } else if (width < 1024) {
        setClipPathValue(clipPaths.laptop);
      } else {
        setClipPathValue(clipPaths.desktop);
      }
    };

    updateClipPath();
    window.addEventListener("resize", updateClipPath);
    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // kurz warten, bis DOM aufgebaut
    }
  }, [location]);

  const heute = new Date();
  heute.setHours(0, 0, 0, 0);
  const kommendeTermine = termine
    .filter((t) => new Date(t.datum) >= heute)
    .sort((a, b) => new Date(a.datum) - new Date(b.datum));

  const naechsterTermin = kommendeTermine[0];

  const moensterliTermin = termine.find((t) => t.beschreibung === "Mönsterli");

  const tourmanager = kontakte.find((k) => k.funktion === "Tourplaner");

  return (
    <>
      <section
        id="start"
        className="relative w-full h-screen py-16 text-qua bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="
            drop-shadow-custom-lg 
            absolute 
            left-[30px] bottom-[30px] 
            sm:left-[50px] sm:bottom-[50px]
            w-52 h-44
            sm:w-64 sm:h-56 
            md:w-72 md:h-64 
            lg:w-[418px] lg:h-[369px]
            z-10 
            flex items-center justify-center
          "
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{ clipPath: clipPathValue }}
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              speed={1000}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="h-full w-full "
            >
              <SwiperSlide className="flex items-center justify-center bg-pri">
                <div className="flex flex-col items-center justify-center text-qua text-center h-full w-full space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl font-sfont font-semibold uppercase tracking-wide">
                    Nächster Auftritt
                  </p>
                  {naechsterTermin ? (
                    <>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        {naechsterTermin.beschreibung}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                        {new Date(naechsterTermin.datum).toLocaleDateString(
                          "de-DE",
                          {
                            day: "2-digit",
                            month: "long",
                          }
                        )}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm">Keine kommenden Termine</p>
                  )}
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex items-center justify-center bg-sec">
                <div className="flex flex-col items-center justify-center text-qui text-center h-full w-full space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl font-sfont font-semibold uppercase tracking-wide">
                    Mönsterli
                  </p>
                  {moensterliTermin ? (
                    <>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                        {new Date(moensterliTermin.datum).toLocaleDateString(
                          "de-DE",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <HashLink
                        smooth
                        to="/#moensterli"
                        className="text-xs sm:text-sm md:text-base lg:text-lg px-8 py-2 bg-pri hover:bg-yellow-600 text-qua rounded inline-block"
                      >
                        Link
                      </HashLink>
                    </>
                  ) : (
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Kein Mönsterli gefunden
                    </p>
                  )}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </section>

      <section id="termine" className="w-full py-16 text-textd">
        <div className="w-full sm:w-3/6 lg:w-3/6 mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold font-sfont text-center">
            Unsere Auftritte
          </h2>
          <p className="mt-4 mb-10 text-2xl text-center">
            Hier findest du unsere kommenden Termine:
          </p>

          {/* Termine-Liste */}
          <div>
            {kommendeTermine.map((t, i) => {
              const datumObj = new Date(t.datum);
              const datumFormat = datumObj.toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

              return (
                <div key={t.datum + i} className="mb-8 text-xl sm:text-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold">{datumFormat}</div>
                      <div>{t.beschreibung}</div>
                    </div>
                    {t.link && t.link.trim() !== "" && (
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 px-4 py-2 text-base sm:text-lg text-white bg-pri rounded hover:bg-opacity-80 transition whitespace-nowrap"
                      >
                        Eventlink
                      </a>
                    )}
                  </div>
                  {i < kommendeTermine.length - 1 && (
                    <hr className="mt-4 border-qui" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="moensterli" className="py-16 bg-hui text-qui">
        <div className="w-full max-w-4xl mx-auto px-4">
          <h3 className="text-4xl sm:text-5xl font-bold font-sfont text-center">
            Mönsterli
          </h3>

          <p className="mt-12 mb-4 text-xl sm:text-2xl font-semibold">
            KARNEVAL ZU BERNANG
          </p>
          <p className="mt-4 mb-20 text-base sm:text-xl">
            Unser Guggemonster „Karneval zu Bernang“ wurde zum ersten Mal im
            Jahre 2001 zu unserem 20. Jubiläum durchgeführt und ist seither ein
            fixer Bestandteil im Dorfleben von Berneck. Es nehmen jedes Jahr bis
            zu zehn verschiedene Guggenmusiken teil, von welchen die meisten aus
            der Region kommen.
          </p>

          <img
            src={`${import.meta.env.BASE_URL}titelbilder/Bierdeckel_1.svg`}
            alt="Flyer"
            className="w-full h-auto rounded drop-shadow-custom-lg mb-10"
          />

          <p className="mt-20 mb-4 text-xl sm:text-2xl font-semibold">
            Sei mit dabei!
          </p>
          <p className="mt-4 text-base sm:text-xl mb-4">
            Wenn ihr eine Gugge seid, die Lust hat, auch dabei zu sein, dann
            meldet Euch doch bei unserer Tourplanerin Leticia unter:
          </p>
          <p className="text-base sm:text-xl text-pri flex items-center gap-2">
            <FaPhoneAlt className="text-lg" />
            <a href={`tel:${tourmanager?.telefon}`} className="hover:underline">
              {tourmanager?.telefon}
            </a>
          </p>
          <p className="text-base sm:text-xl text-pri flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <a
              href="mailto:tourmanager@guggesuuser.ch"
              className="hover:underline"
            >
              {tourmanager?.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
