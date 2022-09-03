import React from "react";
import "./style.css";
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <div className="container">
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}
