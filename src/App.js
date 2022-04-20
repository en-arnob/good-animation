import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Genre from "./components/Genre";
import NavB from "./components/NavB";

function App() {
  return (
    <Router>
      <Nav />
      <NavB />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/genre' element={<Genre />} />
      </Routes>
    </Router>
  );
}

export default App;
