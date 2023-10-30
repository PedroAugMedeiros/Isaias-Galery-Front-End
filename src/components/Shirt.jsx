import React, { useEffect, useState } from 'react'
import api from '../config/configApi'

export default function Shirt(props) {
    const [image, setImage] = useState()
    const imageName = props.shirtName
    console.log(imageName)
    // const {src} = useImage({
    //     srcList: `${api}/files/users/${imageName}`,
    //   })
    const downloadImage = () => {
        console.log()
        api.get('/files/users/BG.jpg').then((response) => {
            console.log(response.prewiew)
            const file = new Blob([response.data], {type: 'image/jpg'})
            console.log(file);
            setImage(file)
          });
      };

      console.log(image)
    
      useEffect(() => {
        downloadImage();
      },[])
  return (
    <div className='w-[60%]'>
        <img className='w-[100%] w-96' src={image}/>
        </div>
  )
}
