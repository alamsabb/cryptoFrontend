import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Trend from "./Trend";
import MarketUpdate from "./Market";
import Example from "./Modal";

function LadingPage({ showModal }) {
  return (
    <div>
      <Hero showModal={showModal} />
      <Trend />
      <MarketUpdate />
    </div>
  );
}

export default LadingPage;
