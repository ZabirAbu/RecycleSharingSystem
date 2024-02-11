import './CSS/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home';
import Item  from './Pages/Item';
import Market  from './Pages/Market';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
        <Route path="/market" element={<Market />} />
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
