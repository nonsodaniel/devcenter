import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/container/Container";
import ItemContextProvider from "./context/ItemContext";
const App = () => {
  return (
    <BrowserRouter>
    <ItemContextProvider>
    <div className="app">
        <div className="container">
          <Container />
        </div>
      </div>
    </ItemContextProvider>
    
    </BrowserRouter>
  );
};

export default App;
