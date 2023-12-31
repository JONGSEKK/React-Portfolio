import React from 'react'
import gambar1 from '../assets/annie-spratt-6a3nqQ1YwBw-unsplash.png'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main' className='h-full w-full'>
        <img src={gambar1} className='h-[70vh] m-auto pt-[4%] max-sm:scale-50 max-sm:duration-500 max-md:duration-1000' />
        <div className='text-center'>
            <h1 className='te text-5xl pt-[2%]'>I'm Rikey Kurniawan</h1>
            <h2 className='text-white text-4xl pt-[1%]'>I'm a
            <TypeAnimation
                sequence={[
                    'Coder',
                    2000,
                    'Developer',
                    2000,
                    'Tech Enthusiast',
                    2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' , color: 'red' }}
                repeat={Infinity}
                /> 
            </h2>
        </div>
    </div>
    
  )
}

export default Main