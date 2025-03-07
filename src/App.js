import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HeySammu from './components/Heysammu';
import Kidos from './components/Kidos';
import Hehe from './components/Hehe';
import Love from './components/Love';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeySammu />} />
          <Route path="/kidos" element={<Kidos />} />
          <Route path="/hehe" element={<Hehe />} />
          <Route path="/Love" element={<Love />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
