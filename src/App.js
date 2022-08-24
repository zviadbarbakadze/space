import Nav from "./components/Nav";
import Home from "./components/Home";
import {Routes,Route}from 'react-router-dom'
import Technology from "./components/Technology";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import { createContext, useRef } from "react";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Europa from "./components/Europa";
import Titan from "./components/Titan";
import Douglas from "./components/Douglas";
import Mark from "./components/Mark";
import Victor from "./components/Victor";
import Anousheh from "./components/Anousheh";
import Launch from "./components/Launch";
import Spaceport from "./components/Spaceport";
import Capsule from "./components/Capsule";


export const myContext=createContext()



function App() {

  const navRef=useRef()
   const showNavbar=()=>{
    navRef.current.classList.toggle("responsive-nav")
   }

  return (
   
    <div className="App">
      <myContext.Provider value={{showNavbar,navRef}}>
      <Nav/>
   
      <Routes>
        <Route path="space"element={<Home/>}/>
        <Route path="technology"element={<Technology/>}>
          <Route index element={<Launch/>}/>
          <Route path='launch' element={<Launch/>}/>
          <Route path='spaceport' element={<Spaceport/>}/>
          <Route path='capsule' element={<Capsule/>}/>
        </Route>
        <Route path="crew"element={<Crew/>}>
          <Route index element={<Douglas/>}/>
          <Route path="douglas" element={<Douglas/>}/>
          <Route path="mark" element={<Mark/>}/>
          <Route path="victor" element={<Victor/>}/>
          <Route path="anousheh" element={<Anousheh/>}/>
        </Route>
        <Route path="destination"element={<Destination/>}>
          <Route index element={<Moon/>}/>
          <Route path="moon" element={<Moon/>}/>
          <Route path="mars" element={<Mars/>}/>
          <Route path="europa" element={<Europa/>}/>
          <Route path="titan" element={<Titan/>}/>
        </Route>
      </Routes>
      </myContext.Provider>
    </div>

  );
}

export default App;
