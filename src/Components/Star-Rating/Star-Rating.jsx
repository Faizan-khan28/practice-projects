import { useState } from "react"
import { FaStar } from "react-icons/fa6";

export default function StarRating () {

    let [rating , setRating] = useState(0)
    let [hover , setHover] = useState(0)
    let star = [1,2,3,4,5,]

    let handleRating = (currentIndex) => {
     setRating(currentIndex)
    }

    let handleMouseEnter = (currentIndex) => {
      setHover(currentIndex)
    }

    let handleMouseLeave = () => {
       setHover(rating)
    }
    

    return (
        <div className="flex justify-center gap-2 cursor-pointer text-4xl">
            {
                star.map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                         className={`${index <= (hover || rating) ? "text-yellow-400" : "text-black" }`}
                         key={index}
                         onMouseMove={()=> handleMouseEnter(index)}
                         onMouseLeave={()=> handleMouseLeave()}
                         onClick={()=> handleRating(index)}
                        />
                    )
                })
            }
        </div>
    )
}