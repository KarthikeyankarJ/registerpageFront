import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
axios.defaults.baseURL = 'https://registerpage-icmm.onrender.com/api/v1'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
        <ProtectedRoutes>
          <HomePage/>
        </ProtectedRoutes>
      } 
      />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      
    </>
  );
}

export function ProtectedRoutes(props){
  if(localStorage.getItem('users')){
    return props.children
  }
  else{
    return <Navigate to="/login"/>
  }

}


export default App;
