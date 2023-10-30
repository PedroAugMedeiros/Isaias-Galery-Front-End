import React, { useState } from 'react'
import Axios from "axios";

export default function Explore() {
  const [images, setImages] = useState()
  const  getImages = async () => {
    Axios.get("https://isaias-galery-back-end.onrender.com/images").then((response) => {
      console.log(response)
          setImages(response.data);
        });
  }
  console.log(images)
  getImages()
  return (
    <div>Explore</div>
  )
}
