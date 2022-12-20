//import logo from './logo.svg';
import './App.css';
import './index.css'
import {Routes, Route, Outlet} from 'react-router-dom';
import {Home} from './Components/Home';
import {Category} from './Components/Category';
import {Login} from './Components/Login';
import {Product} from './Components/Product';
import {Profile} from './Components/Profile';
import { Navbar } from './Components/Navbar';
import { RequirePR } from './Components/RequirePR';

import { AuthProvider } from './Components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Category' element={<div><Category/><Outlet/></div>}>
            <Route path='1' element={<div><h1>Hello from nested route</h1></div>}></Route>
          </Route>
          <Route path='/Login' element={<div><Login/><Outlet/></div>}>
            <Route path='1' element={<div><h1>Hello from nested route</h1></div>}></Route>
          </Route>
          <Route path='/Product' element={<div><Product/><Outlet/></div>}>
            <Route path='1' element={<div><h1>Hello from nested route</h1></div>}></Route>
          </Route>
          <Route path='/Profile' element={<div><RequirePR><Profile/></RequirePR><Outlet/></div>}>
            <Route path='1' element={<div><h1>Hello from nested route</h1></div>}></Route>
          </Route>
        </Routes>
    </AuthProvider>
  );
}

export default App;
