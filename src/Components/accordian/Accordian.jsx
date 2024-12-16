import { useState } from "react";
import data from "./data";
// first single selection
// second multiple selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  let singleSeleted = (getid) => {
    setSelected(getid === selected ? null : getid);
  };
  
  console.log(selected);

  return (
    <div className="flex justify-center items-center mt-10">
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
            </div>
          ))
        ) : (
          <div>Data Not Found !</div>
        )}
      </div>
    </div>
  );
}
