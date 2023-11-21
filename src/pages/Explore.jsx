import React, { useState } from 'react'
import Axios from "axios";
import Shirt from '../components/Shirt';

export default function Explore(props) {
  const { allClothings } = props;
  const [images, setImages] = useState()

  return (
    <div className="flex gap-2 flex-wrap justify-center w-[100%]
    ">{allClothings.map((clothing) => <Shirt shirtName={clothing} />)}</div>
  )
}
