import React from "react";
import { Switch, Route } from "react-router-dom";

// Style
import GlobalStyle from "./components/GlobalStyle";

// Components
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetails />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
