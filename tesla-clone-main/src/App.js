import React, { useEffect } from 'react';
import { Home } from './components/Home/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import { Car } from "./components/Car/Car";
import { Layout } from "./components/Layout/Layout";
import carInfo from "./carInfo.json"
import { SolarRoof } from './components/SolarRoof/SolarRoof';
import { SolarPanels } from './components/SolarPanels/SolarPanels';
import { Login } from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlise";
import { CreateAccount } from "./components/Login/CreateAccount";
import { TeslaAccount } from "./components/TeslaAccount/TeslaAccount";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(login(user))
      } else {
        dispatch(logout())
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {carInfo.map(item => (
          <Route path={item.path} key={item.id} element={<Car {...item} />} />
        ))}
        <Route path="/solarroof" element={<SolarRoof />} />
        <Route path="/solarpanels" element={<SolarPanels />} />
        <Route path="/teslaaccount" element={<TeslaAccount />} />
      </Route>
      <Route path="/login" element={user ? <Navigate to="/teslaaccount" /> : <Login />} />
      <Route path="/createaccount" element={user ? <Navigate to="/teslaaccount" /> : <CreateAccount />} />
    </Routes>
  )
}

export default App
