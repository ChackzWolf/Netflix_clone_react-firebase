import React,{useState,useEffect} from 'react'
import Card from "../Card/Card";
import axios from "../../axios";
import { trending } from '../../constants/url';

function SearchResult(props) {


    const {searchContext} = props
    const [movieList,setMovieList] = useState([])
    const [filteredMovie,setFilteredMovie] = useState([])

    useEffect(()=>{
        axios.get(trending).then((response)=>{
            
            setMovieList(response.data.results)
        })
    },[searchContext])

    useEffect(() => {
        if (searchContext) {
            console.log(movieList)
            const updatedMovie = movieList.filter(movie => {
                const lowerCaseMovieName = movie.title.toLowerCase();
                const lowerCaseSearchResult = searchContext.toLowerCase();
                return lowerCaseMovieName.includes(lowerCaseSearchResult);
              });
            setFilteredMovie(updatedMovie);
        } else {
            setFilteredMovie([]);
        }

    }, [searchContext,movieList]);



  return (
        <div className="mt-">
            <h1 className="text-white text-2xl font-bold rounded pl-10 pt-20">Search result</h1>

            <div className="flex flex-wrap justify-center ">
                {filteredMovie.map((img) => (
                    <div className="w-[230px] m-1">
                        <Card key={img.id} info={img}/>
                        <h1 className='text-white'>{img.title}</h1>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default SearchResult