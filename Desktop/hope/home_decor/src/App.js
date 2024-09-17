import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './style.css';
import Home from './Pages/Home';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;