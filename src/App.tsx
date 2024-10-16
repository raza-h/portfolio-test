import { Image } from "antd";
import Header from "./components/header";
import LinkedinBadge from "./components/linkedin-badge";
import Introduction from "./screens/introduction";
import { fastLogo, dl } from "./assets";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToSection from "./components/scroll-to-section";

const App = () => {
  const [left, setLeft] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.style.overflowY = "auto";
      setLeft("-100%");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader left={left} />
      {left === "-100%" && (
        <>
          <Header />
          <main className="min-h-[100vh]">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ScrollToSection />
                    <Introduction />
                    <section
                      id="about-me"
                      className="bg-[var(--primary)] w-[100%] flex flex-col justify-around min-h-[100vh]"
                    >
                      <h2 className="text-4xl text-center text-white">
                        ABOUT ME
                      </h2>
                      <article className="w-[100%] flex flex-col xl:flex-row justify-center items-center gap-5 md:gap-10 xl:gap-20">
                        <LinkedinBadge />
                        <p className="text-[var(--background)] w-[95%] md:w-[55%] xl:w-[40%] text-[1.25rem] xl:text-[1.5rem] text-justify px-10 xl:px-0">
                          I am Raza Haider, a Comp-Sci graduate and an Associate
                          Software Engineer at Dubizzle Labs, mainly focusing on
                          the development of Dubizzle Group&apos;s web
                          applications. I am a results-driven full-stack
                          software engineer with one year of professional
                          experience, specializing in frontend development with
                          React.js. Adept at leveraging modern technologies to
                          deliver high-quality and scalable solutions, I am
                          seeking a challenging role to apply technical
                          expertise and contribute to impactful projects, while
                          fostering personal and professional growth.
                        </p>
                      </article>
                      <article className="w-[100%] flex flex-wrap justify-around py-2 items-center">
                        <Image
                          src={fastLogo}
                          preview={false}
                          width={100}
                          alt={
                            "National University of Computer and Emerging Sciences"
                          }
                        />
                        <Image
                          src={dl}
                          preview={false}
                          width={200}
                          alt={"Dubizzle Labs"}
                        />
                      </article>
                    </section>
                  </>
                }
              />
            </Routes>
          </main>
        </>
      )}
    </>
  );
};

export default App;
