import axios from 'axios'
import { useState } from 'react'
import { Vortex } from 'react-loader-spinner'
import '../App.css'
import Button from '@mui/material/Button';

const RandomDog = ()=> {

    const urlAPI = "https://dog.ceo/api/breeds/image/random"
    const [dog, setDog] = useState("")
    const [loader, setLoader] = useState(false)

    const RandomImg = async ()=> {
        try {
        setLoader(true)
        const response = await axios.get(urlAPI)
        setDog(response.data)
        } catch(error) {
        alert(`Error! = ${error}`)
        } finally {
        setLoader(false)
        }
    }
    return (
        <div className='container'>
            <div className='img-box'>
                {loader ? <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />: <img className='img' src={dog.message} style={{width: "300px"}} alt=""/>}
            </div>
            <Button variant="contained" onClick={RandomImg}>Random DOG!</Button>
        </div>
    );
}

export default RandomDog