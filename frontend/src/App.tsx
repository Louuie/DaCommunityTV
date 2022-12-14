import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Routes/Home';
import { Privacy } from './Routes/Privacy';
import { TOS } from './Routes/TOS';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/><Route path='privacy' element={<Privacy/>}/><Route path='tos' element={<TOS/>}/>
      </Routes>
  );
}

export default App;

