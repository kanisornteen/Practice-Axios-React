import axios from 'axios'
import { useState } from 'react'

function App() {
  const urlApi = "https://jsonplaceholder.typicode.com/posts"
  const [data, setData] = useState([])

  const handleGet = ()=> {
    axios.get(`${urlApi}/1`).then(response => {setData(response.data)})
  }

  const handlePost = ()=> {
    axios.post(`${urlApi}`, {
      title: "AA TT KAI",
      body: "kakakakakakakakakaa"
    }).then(response => {setData(response.data)})
  }

  const handlePut = ()=> {
    axios.put(`${urlApi}/1`, {
      title: "AA Mamipoko",
      body: "AA Paaom deknoi kai kak plakapong"
    }).then(response => {setData(response.data)})
  }

  const handleDelete = ()=> {
    axios.delete(`${urlApi}/1`)
    .then(() => {
      setData([])
      alert("Delete Complete")
    })
  }

  return (
    <div align="center">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <button onClick={handleGet}>GET</button>
      <button onClick={handlePost}>Post</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default App;
