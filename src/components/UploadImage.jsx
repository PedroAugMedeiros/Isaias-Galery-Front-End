import React, { useEffect, useState } from "react";
import { uploadImage } from "./GetImages";
import { productBrands, productTypes } from "../helpers/types";
import Button from "./Button";

function App() {

  const [image, setImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [preview, setPreview] = useState();
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const handleUpload = async e => {
    e.preventDefault();
    const uploadedFile = await uploadImage(image);
      if(uploadedFile === 'typeFileError') {
        console.log('2')
        setStatus({
          type: 'error',
          mensagem: 'Tipo de arquivo não permitido :('
        });
      } else if(uploadedFile.isError) {
        setStatus({
          type: 'error',
          mensagem: 'Upload não realizado com  sucesso :('
        });
} else {
  setStatus({
    type: 'success',
    mensagem: 'Upload realizado com sucesso :)'
  });
}
}

const handleChange = (value, typeInput) => {
  if(typeInput === 'image') {
    setStatus({type: '', mensagem: ''})
    setImage(value) 
  } else if(typeInput === 'name') {
    setProductName(value) 
  } else if(typeInput === 'productType') {
    setProductType(value)
  } else {
setProductBrand(value)
  }
  
}

const handlePrewiew = (preview) => {
  const reader = new FileReader();
  reader.readAsDataURL(preview);
  reader.onload = () => {
    setPreview(reader.result);
  };
}

useEffect(() => {
  if (image) {
    handlePrewiew(image)
  }
}, [image]);

  return (
    <div className="flex flex-col align-center text-center self-center gap-5 m-20">
      <h1 className="text-[white] font-bold">UPLOAD DE NOVOS PRODUTOS</h1>
      <div className="flex w-[60%] p-0 m-0 justify-center self-center">
        {preview ?  <img src={preview} className="w-[90%]  rounded-md border-black border-4 self-center"/> : <h2 className="text-[red]">PREWIEW DE IMAGEM</h2>}
      </div>
      {status.type === 'success'? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
      {status.type === 'error'? <p style={{color: "#ff0000"}}>{status.mensagem}</p> : ""}
      <form onSubmit={handleUpload} className="flex flex-col w-[70%]  self-center gap-5 font-bold">
          <div className="flex flex-col bg-[#61017D] rounded-md p-">
        <h2>SELECIONAR FOTO</h2> <input  className='p-2' type="file" name="image" id="image" onChange={e => handleChange(e.target.files[0], 'image')} />
        </div>
        <div className="flex flex-col gap-1">
        <h2 className="text-[#61017D] font-bold"> NOMEIE O PRODUTO</h2>
       <input  className='rounded-md p-2' type="text" name="name" id="name" onChange={e => handleChange(e.target.value, 'name')} placeholder="Nome"/> 
        </div>
        <div className="flex flex-col gap-1">
        <h2 className="text-[#61017D] ">
       DEFINA O TIPO DO PRODUTO</h2>
        <select type="select" name="type" id="type"placeholder="Pinot-Noir"  onChange={e => handleChange(e.target.value, 'productType')} className="text-[black] rounded-md p-2">
          {productTypes.map((productType, index) => <option key={index} onClick={e => setProductType(e.target.value)} name={productType} id={productType}>{productType}</option>)}
          </select>
          </div>
          <div className="flex flex-col gap-1">
          <h2 className="text-[#61017D] ">
          MARCA DO PRODUTO</h2>
          <select className="text-[black] p-2 m-0 rounded-md" type="select" name="brand" id="brand" placeholder="Pinot-Noir" onChange={e => handleChange(e.target.value, 'productBrand')}> 
          {productBrands.map((productBrand, index)=><option className="text-[black]" key={index} name={productBrand} id={productBrand}>{productBrand}</option>)}
          </select>
          </div>
          
          <button type="submit" className="p-4 rounded-md text-[white]
          bg-[black] ">Salvar</button>
      </form>
    </div>
  );
}

export default App;
