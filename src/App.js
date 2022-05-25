import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './components/menu/menu';
import Home from './components/home/home';
import Whoami from './components/whoami/whoami';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route exact path="/whoami" element={<Whoami />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
