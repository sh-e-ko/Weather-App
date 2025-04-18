import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import Weather from './Pages/Weather'
import GlassCircles from './Pages/GlassCircles'



function App()
{


  return (
    <div className='app'>
      <GlassCircles  />
      <Weather/>
    </div>
  )
}

export default App
