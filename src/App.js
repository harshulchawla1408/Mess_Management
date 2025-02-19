import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MealMenu from "./components/MealMenu";
import FeedbackForm from "./components/FeedbackForm";
import BillManagement from "./components/BillManagement";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";

import './styles/main.css';
import './styles/customStyles.css';

function App() {
  return (
      <div className="app-container">
        <Header />

        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>

          <Routes>
            <Route path="/menu" element={<MealMenu />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/billmanage" element={<BillManagement/>} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;
