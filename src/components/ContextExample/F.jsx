export const F = ({setCount}) => {
    return (
      <div className="context-example 
                border-yellow-500 
                text-yellow-500">
          <h1>Component F</h1>
          <button className="bg-gray-700 px-5 py-2 rounded-md 
                            shadow-md hover:bg-gray-600 
                            text-yellow-50" 
                onClick={() => 
                        setCount((prevstate) => prevstate + 1)}>
                    +1
          </button>
                    
      </div>
    )
  }
  