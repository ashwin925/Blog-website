import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/home';
import Signup from './component/signup';
import SpaceLoginForm from './component/login';
import './App.css';

function App() {
  return (
    <Router>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<SpaceLoginForm />} />
        </Routes>
    </Router>
  );
}

export default App;


