import "./App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Router>
        <Header className="xdN" />
        {/* <Header title="FundT" searchBar={true}/> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
        {/* {<Footer></Footer>} */}
      </Router>
    </>
  );
}

export default App;
