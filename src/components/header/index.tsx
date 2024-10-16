import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./constants";
import "./index.css";

const Header = () => {
  const location = useLocation();

  const getFormattedHash = (li: string) => {
    return `#${li.toLowerCase().split(" ").join("-")}`;
  };

  const isActive = (li: string) => {
    if (location.pathname === "/" && location.hash === "" && li === "Home")
      return "active";
    const formattedName = li.toLowerCase().split(" ").join("-");
    const formattedPath = location.pathname.split("/")[1];
    if (formattedPath?.length === 0) {
      const formattedHash = location.hash.split("#")[1];
      return formattedHash === formattedName ? "active" : "";
    } else return formattedPath === formattedName ? "active" : "";
  };

  return (
    <header
      id="hide-header"
      className="px-2 py-4 xl:px-24 xl:py-4 w-[100%] flex justify-between items-end border top-0 bg-white fixed z-[200]"
    >
      <h2 className="text-3xl mt-2">
        R<span className="text-[var(--primary)]">H</span>
      </h2>
      <nav>
        <ul className="flex gap-10">
          {navLinks?.map((li) => (
            <Link
              className={`nav-link ${isActive(li)}`}
              to={getFormattedHash(li)}
            >
              {li}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
