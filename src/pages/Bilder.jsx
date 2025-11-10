import { alben } from "../data/bilder";

const albenNachJahr = alben.reduce((acc, album) => {
  if (!acc[album.jahr]) acc[album.jahr] = [];
  acc[album.jahr].push(album);
  return acc;
}, {});

export default function Bilder() {
  return (
    <section id="bilder" className="py-16 text-textd bg-ter font-ffont">
      <div className="w-full max-w-7xl mx-auto px-6">
        {" "}
        {/* etwas mehr padding außen */}
        <h2 className="text-4xl sm:text-5xl font-bold font-sfont text-center mb-16">
          Bildergalerie
        </h2>
        {Object.keys(albenNachJahr)
          .sort((a, b) => b - a)
          .map((jahr) => (
            <div key={jahr} className="mb-24">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-center">
                {jahr}
              </h3>

              <div className="flex flex-wrap justify-center gap-10">
                {" "}
                {/* etwas mehr Abstand zwischen den Cards */}
                {albenNachJahr[jahr].map(({ titel, link, bild }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  w-[calc((100%-3rem)/3)] sm:w-[calc((100%-4rem)/3)] 
                  md:w-[calc((100%-5rem)/3)] 
                  max-w-[190px] lg:max-w-[240px]
                  bg-qua rounded-lg drop-shadow-custom-lg p-3 text-center flex flex-col items-center hover:shadow-lg transition
                "
                  >
                    <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-md">
                      <img
                        src={bild}
                        alt={titel}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center leading-snug break-all whitespace-normal">
                      {titel}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
