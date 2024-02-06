import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

function App() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <div className='relative'>
        <Main/>
      </div>
    </main>
  )
}

export default App
