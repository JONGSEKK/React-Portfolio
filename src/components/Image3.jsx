import { Parallax } from 'react-parallax';
import nasa2 from '../assets/nasa2.jpg'

const Image3 = () => (
    <Parallax className='relative h-screen' bgImage={nasa2} strength={700}>
        <div className='flex items-center justify-center absolute h-screen w-full'>
            <span className='text-white bg-[#333] p-4 text-2xl tracking-[10px] uppercase'>Learning Scroll Parallax</span>
        </div>
    </Parallax>
);

export default Image3;