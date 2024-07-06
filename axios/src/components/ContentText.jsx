import axios from 'axios'
import { useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import Button from '@mui/material/Button';
import './ContentText.css'

const ContentText = ()=> {
    const urlAPI = "https://jsonplaceholder.typicode.com/posts"
    const [data, setData] = useState([])
    const [errorStatus, setErrorStatus] = useState("")
    const [loader, setLoader] = useState(false)

    const handleGet = async ()=> {
        try {
            setLoader(true)
            const response = await axios.get(`${urlAPI}/1`)
            setData(response.data)
            console.log(response.data);
        } catch (error) {
            setErrorStatus(`Error Get! = ${error}`)
        } finally {
            setLoader(false)
        }
    }

    const handlePost = async ()=> {
        try {
            setLoader(true)
            const response = await axios.post(`${urlAPI}`, {
                title: "Teen Post Title",
                body: "Hi my name is kanisorn Pannaracha"
            })
            setData(response.data)
        } catch (error) {
            setErrorStatus(`Error Post! = ${error}`)
        } finally {
            setLoader(false)
        }
    }

    const handlePut = async ()=> {
        try {
            setLoader(true)
            const response = await axios.put(`${urlAPI}/1`, {
                title: "Teen Put Title",
                body: "Hi my name is kanisorn Pannaracha I am Put Title and Body"
            })
            setData(response.data)
        } catch (error) {
            setErrorStatus(`Error Put! = ${error}`)
        } finally {
            setLoader(false)
        }
    }

    const handleDelete = async ()=> {
        try {
            setLoader(true)
            await axios.delete(`${urlAPI}/1`)
            setData([])
        } catch (error) {
            setErrorStatus(`Error Delete! = ${error}`)
        } finally {
            setLoader(false)
        }
    }

    if (errorStatus) return errorStatus

    return (
        <>
            <div className='container'>
                <div className='text-box'>
                    {loader? <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="red"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    /> : <div>
                            <h1>{data.title}</h1>
                            <p>{data.body}</p>
                        </div>}
                </div>
                <div className='button-box'>
                    <Button variant="contained" onClick={handleGet}>GET</Button>
                    <Button variant="contained" onClick={handlePost}>POST</Button>
                    <Button variant="contained" onClick={handlePut}>PUT</Button>
                    <Button variant="contained" onClick={handleDelete}>DELETE</Button>
                </div>
            </div>
        </>
    );
}

export default ContentText