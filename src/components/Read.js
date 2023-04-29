import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import Update from "./Update"
import Delete from "./Delete"
import Modal from "react-modal"

Modal.setAppElement('#root');

const Read = () => {

  const [getText, setGetText] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  

  const openModal = ()=>{
    setIsOpenModal(true)
  }

  const closeModal = ()=>{
    setIsOpenModal(false)
  }


  const handleCreate = () => {
    axios.get("https://dev.codeleap.co.uk/careers/")
      .then((response) => {
        setGetText(response.data.results)
      })
  }

  const setData = (text) =>{
    let {id, title, content} = text
    localStorage.setItem('id', id)
    localStorage.setItem('title', title)
    localStorage.setItem('content', content)
    openModal()
  
  }

 
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this item?")){
      axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)
      .then(() => {
        handleCreate()
      
})
}
    }

  useEffect(() => {
    handleCreate()

  }, [getText])

  return (
    <div>

      <div>

        {getText && getText.map((text, index) => {

          return (
            <div key={index} className="box-2">
              <div className="header-two">
                <div className="header-title">
                {text.title}
                </div>
              <div className="button-edit-delete">
              {text.username===localStorage.getItem('user')?<button className="fa" onClick={()=>{setData(text)}}><FaEdit/></button>:null}
               {isOpenModal && <Update
                isOpen={isOpenModal}
                onRequestClose={closeModal}

                />}
              
            {text.username===localStorage.getItem('user')?<button className="fa" onClick={() => {handleDelete(text.id)}}><FaTrash/></button>:null}
              {/* {showDelete && <Delete
              handleClose={()=>handleDelete()}
            message={"Are you sure you want to delete this item?"}
            />} */}
              </div>
              
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