import axios from "axios"
import { useEffect, useState } from "react"

const Read=()=>{
    const [getText, setGetText] = useState([])

       
    useEffect(() => {
        axios.get("https://dev.codeleap.co.uk/careers/?limit=10")
          .then((response) => {
            setGetText(response.data.results)
          })
    
      }, [])

      return(
     <div>
      
      <div>
      {getText && getText.map((text, index)=>{
        return(
          <div key={index} className="box-2">
            <div className="header">{text.title}</div>
            <div className="name-user">
            <p>@{text.username}</p>
            <p>{new Date(text.created_datetime).toLocaleTimeString('pt-BR')}</p>
            </div>
            <div>{text.content}</div>
          </div>

        )
      })}
     </div>
     </div>
      )

}

export default Read