import { useState } from "react"

export default function RandomColor () {
    
    let [typeOFColor , setTypeOFColor] = useState("hex")
    let [color , setColor] = useState("#000000");

    let genrateRandomColor = (lenght) => {
       return Math.floor(Math.random()*lenght)
    }
   
    
    let handleHexColor = () => {
        let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i = 0; i < 6; i++) {
            hexColor += hex[genrateRandomColor(hex.length)]
        }

        setColor(hexColor)
    }

    let handleRgbColor = () => {
        let r = genrateRandomColor(256)
        let g = genrateRandomColor(256)
        let b =  genrateRandomColor(256)
        setColor(`rgb${r},${g},${b}`)
    }

    console.log(color)

    return (
        <div style={{
            width : "100vw",
            height: "100vh",
            background : color,
            display: "flex",
            justifyContent: "center",
        }}>
            <div className="mt-2">
                <button onClick={()=> setTypeOFColor("hex")} className=" border bg-white px-4">Genrate HexColor</button>
                <button onClick={()=> setTypeOFColor("rgb")} className=" border bg-white px-4">Genrate RgbColor</button>
                <button onClick={typeOFColor === "hex" ? handleHexColor : handleRgbColor} className=" border bg-white px-4">Genrate Random Color</button>
            </div>
        </div>
    )
}