import { useState } from "react"

export default function Counter () {

    let [count , setCount] = useState(0);

    let IncreaseCount = () => {
        setCount((prev) => prev + 1);
    }

    console.log(count)

    let resetCount = () => {
        setCount(count = 0)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-medium">Counter App</h1>
            <h3 className="font-medium text-xl mt-3">Count: {count}</h3>
            <button onClick={IncreaseCount} className="bg-blue-500 px-5 py-2 rounded mt-5">Increase Count</button>
            <button onClick={resetCount} className="bg-red-500 px-5 py-2 rounded mt-5">Reset value</button>
        </div>
    )
}