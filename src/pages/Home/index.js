import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from '../../config/configApi'
import UploadImage from "../../components/UploadImage";
import Button from "../../components/Button";
import BG from '../../imageData/BG.jpg';
import Shirt from "../../components/Shirt";
import Explore from "../Explore";
import { getAll } from "../../components/GetImages";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [, setUser] = useState();
  const [allClothings, setAllClothings] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [images, setImages] = useState();

  const { logedUser } = useAuth();



  const getAllClothings = () => {
    getAll();
}

const nameTrated = logedUser.name.split(' ')[0]

const renderHome = (admin) => {
const render = admin ? <UploadImage />  : <>
Bem vindo {nameTrated}
<Explore allClothings={allClothings}/>
</>
{/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
Sair
</Button></> */}

return render
}


useEffect(() => {
  if(logedUser.email === 'pedroaugmed7@gmail.com' && logedUser.password === 'pedrogioc7') {
    setIsAdmin(true)
    } else {
      setIsAdmin(false)
      getAllClothings()
    }
},[logedUser])

  return (<div className="flex flex-col justify">{renderHome(isAdmin)}</div>)
  // {isAdmin ?  <UploadImage /> : <><C.Title>
  //       Bem vindo {nameTrated}
  //       </C.Title>
  //       <Explore allClothings={allClothings}/>
  //       <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
  //       Sair
  //     </Button></>}
}


export default Home;
