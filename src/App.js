import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import OurClients from './Page/OurClients/OurClients';
import Entomophagous from './Page/Entomophagous/Entomophagous';
import Spraying from './Page/Spraying/Spraying';
import Contact from './Page/Contact/Contact';
import Cartography from './Page/Cartography/Cartography';
import Basket  from './Page/Basket/Basket';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Main />
          </>
        } />
        <Route path="/Entomophagous" element={<Entomophagous/>}/>
        <Route path="/Our-clients" element={<OurClients />} />
        <Route path="/Spraying" element={<Spraying />} />
        <Route path="/Sontact" element={<Contact />} />
        <Route path="/Cartography" element={<Cartography />} />
        <Route path="/Basket" element={< Basket />}/>
      </Routes>
    </Router>
  );
}

export default App;
