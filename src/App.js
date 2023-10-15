import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Navbar } from './component/Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Testpage } from './pages/Testpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/dashboard" element={<Dashboard/>}/>
         
          <Route exact path="/product" element={<Testpage/>}/>
          <Route exact path="/customers" element={<Testpage/>}/>
          <Route exact path="/promote" element={<Testpage/>}/>
          <Route exact path="/income" element={<Testpage/>}/>
          <Route exact path="/help" element={<Testpage/>}/>
         
        </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
