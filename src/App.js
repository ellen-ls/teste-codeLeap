import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Login from './pages/Login';


function App() {
 
   return (
    
<BrowserRouter>
<Routes>
  <Route path={'/'} element={<Login/>}></Route>
  <Route path={'/user'} element={<Users/>}></Route>
</Routes>
</BrowserRouter>
      
    
  );
}

export default App;
