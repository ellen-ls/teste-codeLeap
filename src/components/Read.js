import axios from "axios"
import { useEffect, useState } from "react"

const Read=()=>{
    const [getText, setGetText] = useState([])


    useEffect(() => {
        axios.get("https://dev.codeleap.co.uk/careers/?limit=10")
          .then((response) => {
            setGetText(console.log(response.data.results))
          })
    
      }, [])

      return(
     <div>
      
      <div>
      {getText && getText.map((text, index)=>{
        return(
          <div key={index}>
            {text.title}
          </div>

        )
      })}
     </div>
     </div>
      )

}

export default Read