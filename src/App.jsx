import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {setUser} from "./redux/Slices/authSlice";

function App() {
  const count = useSelector(state => state.counter.value)
  const auth = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(setUser({
        name: 'max',
        age: 20,
      }))}>
        +
      </button>
    </div>
  );
}

export default App;
