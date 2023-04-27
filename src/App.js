import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';






function App() {
 
   return (
<div className='App'>   
<Router>
<Routes>
  <Route path={'/'} element={<Login/>}></Route>
  <Route path={'/create'} element={<Create/>}></Route>
  <Route path={'/read'} element={<Read/>}></Route>
  <Route path={'/update'} element={<Update/>}></Route>
  
 
</Routes>
</Router>
</div>     
    
  );
}

export default App;
