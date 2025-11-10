import React from "react";
import { termine } from "@/data/termine";

export default function Termine() {
  const kommendeTermine = termine
    .filter(({ datum }) => new Date(datum) >= new Date())
    .sort((a, b) => new Date(a.datum) - new Date(b.datum));

  return (
    <section id="termine" className="py-16 text-textd bg-ter">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold font-sfont text-center mb-16">
          Termine
        </h2>

        <div className="space-y-10">
          {kommendeTermine.map(({ datum, beschreibung, link }, index) => (
            <div key={index} className="border-t pt-6">
              <p className="text-xl font-medium mb-2">
                {new Date(datum).toLocaleDateString("de-CH")} – {beschreibung}
              </p>
              {link && link.trim() !== "" && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-quart text-white rounded hover:bg-quart-dark transition"
                >
                  Eventlink
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
