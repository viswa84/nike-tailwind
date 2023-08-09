import React from "react";
import { FlexContent, Hero, Sales, Stores } from "./components";
import { heroapi, popularsales, toprateslaes,highlight, sneaker,story } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifexists />
        <FlexContent endpoint={highlight} ifexists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stores story={story}/>
      </main>
    </>
  );
};

export default App;
