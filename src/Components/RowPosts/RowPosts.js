import React,{useEffect,useState} from "react";

import Card from "../Card/Card";
import axios from "../../axios";

const RowPosts = (props) => {
    const {title,url} = props
    const [movieList,setMovieList] = useState([])

    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response.data.results);
            setMovieList(response.data.results)
        })
    },[url])

    return (
        <div className="mt-1">
            <h1 className="text-white text-2xl font-bold rounded pl-4 pt-4">{title}</h1>

            <div className="flex overflow-x-scroll scrollbar-hide" style={{ overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {movieList.map((img) => (
                    <div className="w-[320px] m-1">
                        <Card key={img.id} info={img}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RowPosts;