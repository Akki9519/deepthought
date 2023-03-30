import React,{useState} from 'react'
import './App.css'
import Box1 from './Component/Box1'
import Box2 from './Component/Box2'
import Box3 from './Component/Box3'
import Box4 from './Component/Box4'

import Navbar from './Component/Navbar'
import Side1 from './Component/Side1'
import Side2 from './Component/Side2'
import Slide from './Component/Slide'

import About from './Component/About'
import Content from './Component/Content'

import Sidebar from './Component/Sidebar'
const App = () => {
  const [toggle,settoggle]=useState(false);
  return (
    <>
<Navbar/> 
<div className="flex flex-row">
 <Side1/> 
 <div className="grid grid-cols-1">
 <About/> 
<Content/> 

  
  <div className="grid grid-cols-2">
 <Box1/> 
  <Box2/> 
  </div>
 
  </div>
  <Side2/>

  
  </div>
 <div className="grid grid-cols-2">
 <Box3/>
 <Box4/>  
 </div>
 <Sidebar/>
    </>
  )
}

export default App