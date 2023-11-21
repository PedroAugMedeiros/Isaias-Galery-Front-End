import React, { useState } from 'react'
import Shirt from './Shirt';
import { getAll } from './GetImages';

export default function Explore() {
  const [images, setImages] = useState()
  const files = getAll()
  console.log(files)

  return (
    <div className="w-[50%] flex gap-5 flex-wrap space-between m-3">{files.map((clothing) => <Shirt shirtName={clothing} />)}</div>
  )
}
