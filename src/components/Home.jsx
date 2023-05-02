import React, { useEffect, useState } from 'react';
import FoodDetails from './FoodDetails';
import Carosel from './Carosel';
import Footer from './Footer';


const Home = () => {
  
  const [allData,setAllData]= useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/allData')
    .then(res =>res.json())
    .then(data=>setAllData(data))
  },[])
  console.log(allData)
  return (
    <>
    <Carosel></Carosel>
    <h1 className='text-center font-thin font-semibold text-3xl mt-10'>Bangladeshi Food Recipe</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 mt-12'>
     
     {
      allData[0]?.food?.map(foods=><FoodDetails
      key={foods.id}
      foods ={foods}
      ></FoodDetails>)
     }
    </div>
    <Footer></Footer>
    </>
  );
};

export default Home;