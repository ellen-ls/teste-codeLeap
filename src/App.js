import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';



function App() {
 
   return (
    
<BrowserRouter>
<Routes>
  <Route path={'/'} element={<Login/>}></Route>
  <Route path={'/create'} component={Create}></Route>
  <Route path={'/read'} component={Read}></Route>
  <Route path={'/update'} component={Update}></Route>
  <Route path={'/delete'} component={Delete}></Route>
</Routes>
</BrowserRouter>
      
    
  );
}

export default App;
