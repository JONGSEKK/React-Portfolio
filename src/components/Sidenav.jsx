import { ImHome} from "react-icons/im";
import { useState } from 'react'
import { IoMdSchool } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineContacts } from "react-icons/md";
import { AiOutlineMenu } from 'react-icons/ai'
import React from 'react'


const Sidenav = () => {

    const [nav, setNav]= useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] cursor-pointer md:hidden'/>

            {nav ? (
                <div>
                </div>
            )
            : (
                <div className='md:block hidden fixed top-[29%] z-10 ml-[1%] '>
                    <div className='flex flex-col pb-[15px]'>
                        <a href='main' className='rounded-full shadow-md bg-zinc-800/90 text-white shadow-green-500 p-4 hover:scale-110 ease-out duration-300 hover:shadow-[0_0_20px] hover:shadow-green-400'><ImHome/></a>
                    </div>
                    <div className='flex flex-col pb-[15px]'>
                        <a href='main' className='rounded-full shadow-md bg-zinc-800/90 text-white shadow-green-500 p-4 hover:scale-110 ease-out duration-300 hover:shadow-[0_0_20px] hover:shadow-green-400'><IoMdSchool/></a>
                    </div>
                    <div className='flex flex-col pb-[15px]'>
                        <a href='main' className='rounded-full shadow-md bg-zinc-800/90 text-white shadow-green-500 p-4 hover:scale-110 ease-out duration-300 hover:shadow-[0_0_20px] hover:shadow-green-400'><FaReact/></a>
                    </div>
                    <div className='flex flex-col pb-[15px]'>
                        <a href='main' className='rounded-full shadow-md bg-zinc-800/90 text-white shadow-green-500 p-4 hover:scale-110 ease-out duration-300 hover:shadow-[0_0_20px] hover:shadow-green-400'><CgWebsite/></a>
                    </div>
                    <div className='flex flex-col pb-[15px]'>
                        <a href='main' className='rounded-full shadow-md bg-zinc-800/90 text-white shadow-green-500 p-4 hover:scale-110 ease-out duration-300 hover:shadow-[0_0_20px] hover:shadow-green-400'><BsAward/></a>
                    </div>
                    <div className='flex flex-col pb-[15px]'>
                        <a href='main' className='rounded-full shadow-md bg-zinc-800/90 text-white shadow-green-500 p-4 hover:scale-110 ease-out duration-300 hover:shadow-[0_0_20px] hover:shadow-green-400'><MdOutlineContacts/></a>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default Sidenav;