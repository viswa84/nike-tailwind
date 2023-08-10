import React from "react";

const Footer = ({ footerApi: { titles, links } }) => {
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-2xl md:gap-5">
          {titles.map((val, i) => (
            <div key={i} className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-bold">
                {val.title}
              </h1>
            </div>
          ))}
          {links.map((navliks, i) => (
            <ul className="grid items-center gap-1" key={i}>
              {navliks.map((link, i) => (
                <li
                  className="text-sm sm:text-xs hover:text-red-500 cursor-pointer"
                  key={i}
                >
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm md:text-center">
            Copyright<sup className="text-base font-bold">&copy;</sup> All
            Reserved Rights{" "}
            <span className="font-semibold">
              <a  className="text-lime-700" href="mailto:viswavishwanath5@gmail.com">
                viswavishwanath5@gmail.com
              </a>{" "}
              {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
