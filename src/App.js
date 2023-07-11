import React, { useEffect } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoAction } from './actions/addressAction';
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import AddContact from './component/screens/AddContact';
import ContactList from './component/screens/ContactList';

function App() {
  const {address, loading, error} = useSelector((state)=>state.getAddress)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTodoAction())
  },[])
  console.log(address,loading)
  return (
    <div className="App">
  <BrowserRouter >
    <header>
     <h1 className='heading'>Address Book</h1>
     <div className='navBar'>
      <Link to='/'>ADD CONTACT</Link>
      <Link to='/contacts'>CONTACTS LIST</Link>
     </div>
    </header>
    <main>
      <Routes>
      <Route path="/" exact Component={AddContact}></Route>
      <Route path="/contacts" exact Component={ContactList}></Route>
      </Routes>
    </main>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
