import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Routes,Route, Router } from 'react-router-dom';
import Homepage from './component/Homepage';
import Photos from './component/Photos';
import Teams from './component/Teams';
import Web from './component/Web';
import Design from './component/Design';
import DnS from './component/DnS';
import Phgy from './component/Phgy';
import Vna from './component/Vna';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/photos' element={<Photos/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/webdev' element={<Web/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/d&s' element={<DnS/>}/>
          <Route path='/phgpy' element={<Phgy/>}/>
          <Route path='/v&a' element={<Vna/>}/>
      </Routes>
    </div>
  );
}

export default App;
