import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating () {

    let [rating , setRating] = useState(0);
    let [hover , setHover] = useState(0);

    let handleOnclick = (index) => {
        setRating(index)  
        console.log(index)  
    }

    let handleOnmousemove = (index) => {
       setHover(index)
       console.log(index) 
    }

    let handleOnmouseleave = (index) => {
        setHover(rating)
        console.log(index) 
    }

    let stars = [1,2,3,4,5];

    return (
        <div className="flex justify-center text-3xl cursor-pointer mt-5 gap-1">
           {
            stars.map((index)=> {
                return <FaStar 
                  key={index}
                  className={`${index <= (hover || rating) ? "text-yellow-500" : "text-black"}`}
                  onClick={()=> handleOnclick(index)}
                  onMouseMove={()=> handleOnmousemove(index)}
                  onMouseLeave={()=> handleOnmouseleave(index)}
                />
            })
           }
        </div>
    )
}