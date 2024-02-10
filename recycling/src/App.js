import './CSS/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Items  from './Pages/Items';

function App() {
  return (

    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />

      </Routes>
    </Router>

  );
}

export default App;
