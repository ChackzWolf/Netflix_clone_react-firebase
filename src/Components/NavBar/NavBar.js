import React , {useState,useEffect} from 'react'
import { IoNotificationsOutline } from "react-icons/io5";

import SearchBar from "../SearchBar/SearchBar"

export const NavBar = () => {



    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);








  return (
<>
    <div className={`flex justify-between fixed top-0 left-0 right-0 z-50 w-fullshadow-md py-2 items-center  ${isScrolled   ? 'bg-[#141414] shadow-md'  : 'bg-transparent'}`}>
        <div className={`flex p-3        `}>
            <a href=" "><img className='my-3 w-24 ml-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Netflix_logo'/></a>
            
            <ul className='flex bg-transparent items-center'>
                <li className='pl-5 text-slate-100 hover:text-slate-300'><a href=" ">Home</a>   </li>
                <li className='pl-5 text-slate-100 hover:text-slate-300'><a href=" ">TV Shows</a>  </li>
                <li className='pl-5 text-slate-100 hover:text-slate-300'><a href=" ">Movies</a>    </li>
                <li className='pl-5 text-slate-100 hover:text-slate-300'><a href=" ">New & Popular</a> </li>
                <li className='pl-5 text-slate-100 hover:text-slate-300'><a href=" ">My List </a>   </li>
                <li className='pl-5 text-slate-100 hover:text-slate-300'><a href=" ">Browse by Languages</a>   </li>
            </ul>

        </div>
        <div className='flex p-3'>

            <SearchBar/>
            <a href=" " className='text-blue-100 mr-5 '>children</a>
            <IoNotificationsOutline className='size-6 text-white mx-4' />
            <img className='w-8 h-8 mx-8' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        </div>
    </div>
</>
  );
};

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       