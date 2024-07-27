import {data} from "./data/data.ts";
import {Text} from "./container/texte.tsx";
import {useEffect, useState} from "react";

function App() {
    const [currentData, setCurrentData] = useState(data[0])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [state, setState] = useState(false)

    useEffect(() => {
        if(!state) return

        setCurrentData(data[currentIndex])
    }, [currentIndex, state]);

    useEffect(() => {
        if(!state) return

        if (currentIndex != data.length - 1) {
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1)
            }, currentData.time * 1000)
        }
    }, [currentData, state]);

  return (
      <section className="text-container">
          {
              state ?
                  <Text content={currentData}/>
                  :
                  <button onClick={()=>setState(true)} className={"button"}>Surprise</button>
          }
      </section>
  )
}

export default App
