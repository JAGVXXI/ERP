import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Landing} from '../Pages/index';
import {Login} from '../Pages/Login';
import {SignUp} from '../Pages/SignUp';
import {UserA} from '../Pages/UserA';
import {UserB} from '../Pages/UserB';
import {UserC} from '../Pages/UserC';
import {Admin} from '../Pages/Admin';
import CompCreateUser from '../Components/createUser';
//import {CompCreateUser} from '../Components/createUser.jsx';
//import {Prueba} from '../Pages/Prueba';
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path='/Home' element={<Landing/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/UserA' element={<UserA/>}/>
      <Route path='/UserB' element={<UserB/>}/>
      <Route path='/UserC' element={<UserC/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Admin/create' element={<CompCreateUser/>}/>
      <Route path='/Admin/home'/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
