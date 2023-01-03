import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {setUser} from "./redux/Slices/authSlice";
import RegisterOrLoginPage from "./Pages/RegisterOrLoginPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<RegisterOrLoginPage/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/registration'} element={<RegisterPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
