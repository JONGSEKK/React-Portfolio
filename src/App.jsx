import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
// import background from './assets/pattern2.svg'

function App() {
  return (
    <div className='bg-black h-screen'>
      <Sidenav/>
      <Main />
    </div>
  )
}

export default App
