import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import PropetyPage from './pages/PropetyPage';
import Aboutme from './pages/Aboutme';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertyList/>} />
      <Route path="/propertepage" element={<PropetyPage/>} />
       <Route path="/about" element={<Aboutme/> }/>
    
    </Routes>
  );
}

export default App; 