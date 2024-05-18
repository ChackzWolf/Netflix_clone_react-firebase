import React, { useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube"
import axios from "../../axios";

const Card = (props) => {
    const [urlId,setUrlId] = useState()


    const opts = {
        height:'130',
        width:'224',
        playerVars:{
            autoplay:1
        }
    }

    const { info } = props;
    const { backdrop_path,id } = info;

    const handleMovie =(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
                
            }else{
                console.log('Array empty')
            }
        })
    }
    return (
        <div className=" w-56  rounded-lg hover:scale-105">
            {urlId ? <YouTube opts={opts} videoId={urlId.key}/> :
            <img onClick={()=>handleMovie(id)} src={imageUrl+backdrop_path} alt=""  className="rounded-md"/>
             
            }
        </div>
         
    );
};

export default Card