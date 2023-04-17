import axios from "axios"
import { useEffect, useState } from "react"
import {FaEdit, FaTrash} from "react-icons/fa"


const Read=()=>{
    const [getText, setGetText] = useState([])
    const [update, setUpdate] = useState([])

  const handleUpdate = (id) =>{
   axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`)
   .then(()=>{
    setUpdate(id)
   })
   
  }   


  const handleDelete = (id) =>{
    axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)
    .then(()=>{
      setGetText()
    })
    }
       
    useEffect(() => {
        axios.get("https://dev.codeleap.co.uk/careers/")
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
            <div className="header">{text.title}
            <button className="fa" onClick={()=>handleUpdate(text.id)}><FaEdit/></button>
            <button className="fa" onClick={()=>handleDelete(text.id)}><FaTrash/></button>            
           </div>
           <div className="name-user">
            <p>@{text.username}</p>
            <p>{new Date(text.created_datetime).toLocaleTimeString('pt-BR')}</p>
            </div>
            <div className="content">
              <p>{text.content}</p>
              </div>
          </div>

        )
      })}
     </div>
     </div>
      )

}

export default Read