import { Input } from '@chakra-ui/input'
import React from 'react'

function InputPrueba() {
    let hola = document.getElementById("input-file")
    hola?.addEventListener("change", (e)=>handleFile(e))

    const handleFile =(e)=>{
        let example = document.getElementById("image-example")
        let arr = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(arr)
        reader.addEventListener("load", (e)=>{
            let newImage = `<img src='${e.currentTarget.result}'/>`
            console.log(e.currentTarget.result)
            example.innerHTML += newImage
        })
    }

    return (
        <div>
            <Input id="input-file" type="file"  />
            <div id="image-example" >

            </div>
        </div>
    )
}

export default InputPrueba
