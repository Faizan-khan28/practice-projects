import { useState } from "react";
import data from "./data";
// first single selection
// second multiple selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiplesSelected , setmultiplesSelected] = useState(null);

  let singleSeleted = (getid) => {
    setSelected(getid === selected ? null : getid);
  };

  let multipleSelected = (getmulid) => {
      setmultiplesSelected(getmulid === multiplesSelected ? null : getmulid);
  }

  console.log(multiplesSelected);

  console.log(selected);

  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <button onClick={()=> multipleSelected(data.id)} className="mb-3 bg-black text-white p-2 font-semibold cursor-pointer">Enable Multiple Accordian</button>
      <div className="flex items-center justify-center flex-col">
        {data && data.length > 0 ? (
          data.map(dataitem => (
            <div className="flex flex-col  items-center" key={dataitem.id}>
              <div
                onClick={() => singleSeleted(dataitem.id)}
                className="flex gap-4 items-center mb-5 cursor-pointer"
              >
                <h3 className=" font-semibold text-lg">{dataitem.question}</h3>
                <span className=" text-2xl">+</span>
              </div>
              {selected === dataitem.id ? (
                <div className="flex justify-center w-[700px] px-10 mb-2 text-sm">
                  {dataitem.answer}
                </div>
              ) : null}
              {
                multiplesSelected === data.id ? <div className="flex justify-center w-[700px] px-10 mb-2 text-sm">
                {dataitem.answer}
              </div>  : null
              }
            </div>
          ))
        ) : (
          <div>Data Not Found !</div>
        )}
      </div>
    </div>
  );
}
