import React, { useEffect, useState } from 'react'
import data from "./data.json";

const ImageSliding = () => {
    const [next, setNext] = useState(0)
    const handleNext = () => {
      
        setNext((previousValue)=>{
            if(previousValue == data.length-1){
                return 0;
            }
            return previousValue+1
        })  

    }

    const handlePre = () => {
        if(next == 0){
            setNext(data.length-1)
        }else{
            setNext(next-1)
        }
    }

    useEffect(()=>{
        setInterval(handleNext,2000)
    },
    [])
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-6 py-12">
       
         <div className='left-btn'>
           
                {/* <button onClick={handlePre}>{"<"}</button> */}
            </div>
            <img src={data[next].download_url} alt="" />
            <div className='right-btn'>
                {/* <button onClick={handleNext}>{">"}</button> */}
        </div>

    </div>  
     <h3 >Add Gallery</h3>
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-6 py-12">
       
         <div className='left-btn'>
                {/* <button onClick={handlePre}>{"<"}</button> */}
            </div>
            <img src={data[next].download_url} alt="" />
            <div className='right-btn'>
                {/* <button onClick={handleNext}>{">"}</button> */}
        </div>

    </div>
     <h3 >Information Video Gallery</h3>






    </div>
  )
}

export default ImageSliding
