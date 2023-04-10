import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
// import Auth from './components/Auth/Auth';
import NavbarN from './components/NavbarN/NavbarN';
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="App">
    <Router>
    <NavbarN />
    <AllRoutes />
    {/* <Auth /> */}
    </Router>
    </div>
  );
}

export default App;
