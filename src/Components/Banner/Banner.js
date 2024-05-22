 import React, { useState,useEffect} from "react";
 import {imageUrl } from "../../constants/constants";
 import { CiCircleInfo } from "react-icons/ci";
 import { FaPlay } from "react-icons/fa";
 import axios from "../../axios";
import RowPosts from "../RowPosts/RowPosts";
import { originals, trending } from "../../constants/url";

 export const Banner = ()=>{
    const [movie,setMovie] = useState()

    useEffect(()=>{
        axios.get(trending).then((response)=>{
            setMovie(response.data.results[1])
        })
    },[])

    return(

<div className={`h-auto relative bg-cover flex flex-col `} style={{backgroundImage: `url(${movie ? `${imageUrl}${movie.backdrop_path}` : ''})`}}>
            <div className="mt-80 ml-16">
                  
                <div className="w-[650px]">
                    <h1 className="text-white text-7xl font-bold">{movie ? movie.title : ""}</h1>
                    <h4 className="text-slate-100 mt-5">{movie? movie.overview :""}</h4>
                </div>
                <div className=" flex mt-3">
                    <a href=" ">
                        <div className="bg-slate-50 mr-5 text-xl h-11 font-bold rounded px-5 py-2 hover:bg-gray-400 flex">
                            <FaPlay className="mt-1" />
                            <h1 className="mx-2">Play</h1>
                        </div>
                    </a>
                    
                    <a href=" ">
                        <div className="flex flex-row gap-1 w-40 h-11 bg-gray-400 bg-opacity-85 hover:bg-opacity-20 mr-5 text-xl font-bold rounded px-5 py-2 text-white">
                            <CiCircleInfo className="mt-1"/>
                            <h1>More info</h1>
                        </div>
                    </a>

                </div>
                
            </div>
      
                <RowPosts title = "Netflix Originals" url ={originals}/>
          
        
        </div>
    )
    
 }
 
