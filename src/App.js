
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/container/Container";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
<Container />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
