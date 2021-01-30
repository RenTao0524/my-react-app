import "./App.css";
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContextContainer from "./store/index.jsx";
import ContextDemo from "./components/ContextDemo/index.jsx";
import Modal from "./components/Dialog/index.jsx";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const About = lazy(() => import("./pages/About/index.jsx"));
const Topics = lazy(() => import("./pages/Topics/index.jsx"));

function App() {
  const [show, setShow] = useState(false);
  function setvalue() {
    setShow(!show);
  }
  return (
    <ContextContainer>
      {show && (
        <Modal>
          <h2>sdsdsd</h2>
        </Modal>
      )}
      <button onClick={setvalue} type="button">
        sdsd
      </button>
      <div className="App">
        <ContextDemo />
      </div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </Suspense>
        </div>
      </Router>
    </ContextContainer>
  );
}

export default App;
