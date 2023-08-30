import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Mousemove from './components/Mousemove'
import ScrollBgParallax from './components/ScrollBgParallax'
import Image1 from './components/image1'
import Img2 from './components/Image2'
import Img3 from './components/Image3'
import Textbox from './components/Textbox'
// import background from './assets/pattern2.svg'

function App() {
  return (
    <div className='bg-black h-screen'>
      <Image1/>
      <Textbox/>
      <Img2/>
      <Textbox/>
      <Img3/>
    </div>
  )
}

export default App
