import React,{useState,useEffect} from 'react';
import "./Home.css";
import axios from "axios"
import toast ,{Toaster} from "react-hot-toast"

function Home() {
  const [films,setFilms] =useState([])

  const loadFilms = async ()=> {
    try{
    const response = await axios.get("http://localhost:5000/films")
    setFilms(response.data.data)
    toast.success("All Film Fetched ")
    }catch(error){
      toast.error(error?.response?.data?.message || error?.message)
    }
  }
  useEffect(()=>{
    loadFilms()
  },[])
  return (
    <div>Home
<Toaster/>
    </div>
  )
}

export default Home