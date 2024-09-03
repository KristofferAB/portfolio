import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
