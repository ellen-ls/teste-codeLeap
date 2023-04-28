import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import Update from "./Update"
import Modal from "react-modal"
import { Link } from "react-router-dom"

Modal.setAppElement('#root');


const Read = () => {

  const [getText, setGetText] = useState([])
  const [IsOpenModal, setIsOpenModal] = useState(false)

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
    axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`)
      .then(() => {
        handleCreate()
      })
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
              <div className="header-two">{text.title}
                 <button className="fa" onClick={()=>{setData(text)}}><FaEdit/></button>
                
                {IsOpenModal && <Update
                isOpen={IsOpenModal}
                onRequestClose={closeModal}

                  
                />}
              
                
                <button className="fa" onClick={() => { if (window.confirm('Are you sure you want to delete this item?')) { handleDelete(text.id) } }}><FaTrash /></button>
               
                
                

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