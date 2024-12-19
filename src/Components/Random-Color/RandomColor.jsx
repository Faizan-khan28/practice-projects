import { useEffect, useState } from "react"

export default function RandomColor () {
     
    const [typeofColor , setTypeofColor] = useState('hex');
    const [color , setColor] = useState("#000000");

    let handleGenrateRandomColor = (lenght) => {
        return Math.floor(Math.random()*lenght);
    }

    let handleCreateHexColor = () => {
        const hex = [1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i=0; i<6; i++) {
            hexColor += hex[handleGenrateRandomColor(hex.length)];
        }

        setColor(hexColor);
    } 

    let handleCreateRGBColor = () => {
        const r = handleGenrateRandomColor(256);
        const g = handleGenrateRandomColor(256);
        const b = handleGenrateRandomColor(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=> {
        if(typeofColor === 'rgb') {
            handleCreateRGBColor();
        }else {
            handleCreateHexColor();
        }
    },[typeofColor])

    return (
        <div
         style={{
           width : "100vw",
           height: "100vh",
           background : color,
           display: "flex",
           alignItems: "center",
           flexDirection: "column"
         }}>
            <div className="flex items-start gap-2 mt-2 ">
            <button onClick={()=> setTypeofColor('hex')} className=" border bg-white  rounded-md p-2 ">Create Hex Color</button>
            <button onClick={()=> setTypeofColor('rgb')} className=" border bg-white  rounded-md p-2 ">Create RGB Color</button>
            <button onClick={typeofColor === "hex" ? handleCreateHexColor : handleCreateRGBColor} className=" border bg-white rounded-md p-2 ">Genrate Random Color</button>
            </div>

            <div className="flex gap-2 mt-60 font-semibold text-3xl">
                <h3>{typeofColor === "rgb" ? 'RGB Color' : 'Hex Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}