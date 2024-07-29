import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import HCustomers from "./Components/HCustomers/HCustomers";
import Subscribe from "./Components/Subscribe/Subscribe";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Title title="Services" />
        <Services />
        <Title title="About" />
        <About />
        {/* <Title title="Team" />
        <Team /> */}
        <Title title="Happy Customer" />
        <HCustomers />
        <Subscribe />
      </div>
    </>
  );
};

export default App;
