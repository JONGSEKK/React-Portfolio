import { Parallax } from 'react-parallax';
import nasa1 from '../assets/nasa1.jpg'

const Image2 = () => (
    <Parallax className='relative h-screen' bgImage={nasa1} strength={1000}>
        <div className='flex items-center justify-center absolute h-screen w-full'>
            <span className='text-white bg-[#333] p-4 text-2xl tracking-[10px] uppercase'>Learning Scroll Parallax</span>
        </div>
    </Parallax>
);

export default Image2;