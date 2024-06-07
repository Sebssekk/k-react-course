import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center italic font-semibold">
                While you're not loged in.. here's a counter
            </h1>
            <div className="bg-gray-800 px-5 py-3 rounded-md shadow-md m-5">
                <p className="text-center">Count : {count}</p>
                <div className="flex gap-2">
                    <button className="bg-gray-700 px-5 py-2 rounded-md 
                                        shadow-md hover:bg-gray-600" 
                        onClick={() => setCount((prevstate) => prevstate + 1)}>+1</button>
                    <button className="bg-gray-700 px-5 py-2 rounded-md shadow-md 
                                       hover:bg-gray-600" 
                        onClick={() => setCount((prevstate) => prevstate - 1)}>-1</button>
                </div>
            </div>
        </div>
    )
}