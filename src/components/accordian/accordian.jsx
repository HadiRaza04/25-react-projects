import { useState } from "react"
import data from "./data"

const Accordian = () => {
    const [selected, setSelected] = useState(null)

    function handleClick(itemId) {
        setSelected(itemId === selected ? null : itemId)
    }
    
  return (
    <div>
        {
            data && data.length > 0 ?
                data.map(dataItem => <div key={dataItem.id} className="w-[700px] cursor-pointer p-2 bg-slate-800 m-2">
                    <div className="flex p-2 justify-between" onClick={() => handleClick(dataItem.id)}>
                        <h3 className="text-xl">{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ? <div className="w-full text-gray-400">
                            {dataItem.answer}
                        </div>: null
                    }
                </div>)
             : <div>Data not found</div>
        }
    </div>
  )
}

export default Accordian