import { Link } from "react-router-dom";
import logo from "../assets/logo/Guggesuuser_Logo.png";
import { kontakte } from "../data/kontakte";

export default function Footer() {
  const tourmanager = kontakte.find((k) => k.funktion === "Tourplaner");
  const major = kontakte.find((k) => k.funktion === "Major");
  return (
    <footer className="bg-sen text-textl font-ffont px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 text-sm py-8">
        {/* Linke Spalte */}
        <div className="md:w-1/3">
          <p className="font-semibold mb-2 text-lg">
            Hast du Lust bei uns mitzumachen?
          </p>
          <p className="text-base">
            …dann melde dich bei unserem Major Markus
            <br />
            <a
              href="mailto:major@guggesuuser.ch"
              className="text-sec hover:underline"
            >
              {major?.email}
            </a>
          </p>
        </div>

        {/* Mittlere Spalte */}
        <div className="md:w-1/3">
          <p className="font-semibold mb-2 text-lg">Guggenmusik gesucht?</p>
          <p className="text-base">
            Seid ihr eine Guggemusik und würdet gerne an unserem Guggen-Monster
            teilnehmen?
            <br />
            Oder wollt ihr, dass wir an eurem Fest/Umzug spielen?
            <br />
            <br />
            …dann meldet euch bei unserer Tourmanagerin Leticia.
            <br />
            <a
              href="mailto:tourmanager@guggesuuser.ch"
              className="text-sec hover:underline"
            >
              {tourmanager?.email}
            </a>
            <br />
            <a
              href={`tel:${tourmanager?.telefon}`}
              className="text-sec hover:underline"
            >
              {tourmanager?.telefon}
            </a>
          </p>
        </div>

        {/* Rechte Spalte (Logo) */}
        <div className="md:w-1/3 flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-52 object-contain" />
        </div>
      </div>

      {/* Unterer Balken */}
      <div className="mt-6 text-center text-xs border-t border-textd/30 pt-6">
        © 2025 Guggesuuser - Alle Rechte vorbehalten -{" "}
        <Link to="/datenschutz" className="hover:text-pri underline">
          Datenschutzerklärung
        </Link>
      </div>
    </footer>
  );
}
