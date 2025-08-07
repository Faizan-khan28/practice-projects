import { useState } from "react";
import data from "./data";

export default function Accordian() {
  let [enableOne , setEnableOne] = useState(null);
  let [enableMultiple , setEnablMultiple] = useState(false);
  let [multipleID , setMultipleID] = useState([]);


  let handleOne = (id)=> {
    setEnableOne((prevId)=> prevId === id ? null : id);
  }

  let handleMultiple = (id) => {
     let copyMul = [...multipleID];
     let findIndexOfid = copyMul.indexOf(id)
    //  console.log(findIndexOfid)
     if(findIndexOfid === -1) {
      copyMul.push(id)
     } else {
      copyMul.splice(findIndexOfid , 1)                     
     }
     setMultipleID(copyMul)
  } 

  console.log(multipleID)

  return (
    <div>
      <div className="text-center mt-2 mb-10">
        <button onClick={()=> setEnablMultiple(!enableMultiple)} className="bg-blue-400 border to-blue-200 py-2 px-6">Enable Multiple Accordian<span className="pl-2 text-xl">+</span></button>
      </div>
      {
        data && data.map((acc)=> (
          <div key={acc.id} className="flex justify-center mt-4">
           <div onClick={()=> enableMultiple ? handleMultiple(acc.id) : handleOne(acc.id)} className="bg-blue-400 cursor-pointer text-center border to-blue-200 py-2 w-[600px]">
             <h1>{acc.question}<span className="pl-2">+</span></h1> 
             {
              enableMultiple 
              ? 
              multipleID.indexOf(acc.id) !== -1 && (
                <p>{acc.answer}</p>
              ) 
              : enableOne === acc.id && (
                <p>{acc.answer}</p>
              )
             }
           </div>
          </div>
        ))
      }
    </div>
  ); 
}