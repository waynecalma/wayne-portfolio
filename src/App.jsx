import { useState } from 'react'
import Navbar from './components/Navbar'; // You imported it here...
import './App.css'

function App() {
  return (
    <div>
      <Navbar />  {/* <--- YOU MUST ADD THIS TAG TO SHOW THE BUTTON */}
      
      {/* This is your main content area */}
      <div className="flex h-screen items-center justify-center bg-slate-900">
        <h1 className="text-4xl font-bold text-sky-400 underline">
          My Portfolio
        </h1>
      </div>
    </div>
  )
}

export default App;