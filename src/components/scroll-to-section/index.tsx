import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToSection;
