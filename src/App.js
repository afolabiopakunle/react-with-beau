import React from "react";
import "./style.css";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
