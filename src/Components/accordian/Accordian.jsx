import data from "./data";

export default function Accordian() {
  return (
    <div>
      <h1 className="text-3xl font-medium flex justify-center">
        Accordian
      </h1>
      <div className="text-center mt-2 mb-10">
        <button className="bg-blue-400 border to-blue-200 py-2 px-6">Enable Multiple Accordian<span className="pl-2 text-xl">+</span></button>
      </div>

      {
        data && data.map((acc)=> (
          <div className="flex justify-center mt-4">
           <div className="bg-blue-400 cursor-pointer text-center border to-blue-200 py-2 w-[600px]">
             <h1>{acc.question}<span className="pl-2">+</span></h1>
             <p>{acc.answer}</p>
           </div>
          </div>
        ))
      }
    </div>
  ); 
}
