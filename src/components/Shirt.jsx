import React, { useEffect, useState } from 'react'
import { productionlink } from "../config/configApi";

export default function Shirt(props) {
    const [imageUrl, setImageUrl] = useState()
    const imageName = props.shirtName

      useEffect(() => {
       setImageUrl(`${productionlink}/images/${imageName}`)
      },[])
  return (
    <div className='flex flex-col flex-wrap w-[42%] bg-primary-color text-center m-2 rounded-md'>
        <img className='w-[100%] h-[70%] rounded-t-md' src={imageUrl}/>
        <div className='flex flex-col gap-2 p-2'>
        <h1 className='text-[#a855f7]'>{imageName.split('.')[0]}</h1>
        <button className='text-[white] bg-secondary-color w-[80%] self-center rounded-md outline-none mb-1'>COMPRAR</button>
        </div>
       
        </div>
  )
}
