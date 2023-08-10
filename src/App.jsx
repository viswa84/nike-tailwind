import React from "react";
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stores } from "./components";
import { heroapi, popularsales, toprateslaes,highlight, sneaker,story ,footerAPI} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar/>
      <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifexists />
        <FlexContent endpoint={highlight} ifexists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker}/>
        <Stores story={story}/>
        <Footer footerApi={footerAPI}/>
        
      </main>
    </>
  );
};

export default App;
