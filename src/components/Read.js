import axios from "axios"
import { useEffect, useState } from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import Modal from "./Modal"


const Read = () => {
  const [getText, setGetText] = useState([])
  const [edit, setEdit] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleCreate = () => {
    axios.get("https://dev.codeleap.co.uk/careers/")
      .then((response) => {
        setGetText(response.data.results)
      })
  }

  const handleUpdate = async (id) => {

    try {
      const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, ...getText)
      console.log(response.data)
      setEdit(response.data)
      setIsOpen(true)


    } catch (error) {
      console.log(error)
    }


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
                <button className="fa" onClick={() => handleUpdate(text.id)}><FaEdit/></button>
                {isOpen && <Modal
                  closeModal={()=>
                    {setIsOpen(false) 
                    setEdit(null)
                  }}
                  onSubmit={handleUpdate}
                  defaultValue={edit !== null && getText[edit]} />}

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