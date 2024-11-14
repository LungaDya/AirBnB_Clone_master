import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import SearchPage from "./components/SearchPage";
import Modal from "./components/Modal";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>
        </Switch>
        <Router path='/'>
         <Modal />
        </Router>
        <Footer />
      </Router>
      {/*
       Home
        Header

        Banner
         Search

         Card

         Footer

     Search Page
        Header 
  */}
    </div>
  );
};

export default App;
