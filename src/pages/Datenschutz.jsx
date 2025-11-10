import { kontakte } from "../data/kontakte";
export default function Datenschutz() {
  const praesident = kontakte.find((k) => k.funktion === "Präsidentin");
  return (
    <>
      <section className="font-ffont text-textd w-[60%] mx-[20%] py-12">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Verantwortlich</h2>
        <p>
          Guggesuuser Berneck <br />
          Wislistrasse 1c <br />
          9442 Berneck <br />
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          Erhebung von Daten
        </h2>
        <p>
          Beim Besuch unserer Webseite werden automatisch gewisse technische
          Daten erfasst, insbesondere:
        </p>
        <ul className="list-disc pl-5">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Browsertyp und Version</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>
          Diese Daten werden vom Hosting-Anbieter automatisch in sogenannten
          Logfiles gespeichert. Sie dienen ausschliesslich zur Sicherstellung
          eines stabilen und sicheren Betriebs der Webseite. Eine
          personenbezogene Auswertung oder Weitergabe findet nicht statt.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Cookies</h2>
        <p>Unsere Webseite verwendet keine Cookies und kein Tracking.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Externe Dienste</h2>
        <p>
          Es werden keine externen Dienste wie Google Analytics, Google Fonts,
          YouTube oder Kartenanbieter verwendet.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">
          Rechte der Nutzer:innen
        </h2>
        <p>
          Sie haben das Recht auf Auskunft über die von uns gespeicherten
          personenbezogenen Daten sowie auf Berichtigung oder Löschung, soweit
          dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an: <br />
          {praesident?.name} <br /> <br />
          Guggesuuser Berneck <br />
          Wislistrasse 1c <br />
          9442 Berneck <br />
          <br />
          {praesident?.email}
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Stand</h2>
        <p>
          Diese Datenschutzerklärung wurde zuletzt aktualisiert am: 11.11.2025
        </p>
      </section>
    </>
  );
}
