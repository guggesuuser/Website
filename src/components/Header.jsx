import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaOptinMonster,
  FaCalendarAlt,
  FaUsers,
  FaImages,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo/Guggesuuser_Viking.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY < 0) return; // Safari Fix

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Runterscrollen und mehr als 50px gescrollt → Header ausblenden
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        // Hochscrollen → Header einblenden
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-hui flex justify-between items-center p-5 h-16 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out shadow-md ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        to="/"
        className="flex-shrink-0 z-30 mt-[50px] sm:mt-[100px] md:mt-[140px] lg:mt-[180px]"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-20 sm:w-32 md:w-40 lg:w-48 max-w-full h-auto drop-shadow-custom-lg"
        />
      </Link>

      <button
        onClick={toggleMenu}
        className="md:hidden text-textd focus:outline-none z-40"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full right-0 w-full md:static md:block md:w-auto md:flex md:flex-row md:gap-10 flex flex-col items-center gap-10 font-ffont text-textd p-4 md:p-0 z-20
          + bg-hui md:bg-transparent
          + bg-opacity-95
          + backdrop-blur-md
        `}
      >
        <NavItem icon={<FaHome size={24} />} text="Home" href="/" />
        <HashLink
          smooth
          to="/#termine"
          className="flex items-center gap-2 hover:text-pri"
        >
          <FaCalendarAlt size={24} /> <span>Termine</span>
        </HashLink>

        <HashLink
          smooth
          to="/#moensterli"
          className="flex items-center gap-2 hover:text-pri"
        >
          <FaOptinMonster size={24} /> <span>Mönsterli</span>
        </HashLink>
        <NavItem icon={<FaUsers size={24} />} text="Verein" href="/verein" />
        <NavItem icon={<FaImages size={24} />} text="Galerie" href="/bilder" />
      </nav>
    </header>
  );
}

function NavItem({ icon, text, href }) {
  return (
    <Link
      to={href}
      className="flex items-center gap-2 transition-colors duration-200 hover:text-pri"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}
