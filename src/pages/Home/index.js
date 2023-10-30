import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import api from '../../config/configApi'
import UploadImage from "../../components/UploadImage";
import Button from "../../components/Button";
import BG from '../../imageData/BG.jpg';
import Shirt from "../../components/Shirt";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [, setUser] = useState();
  const [allClothings, setAllClothings] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [images, setImages] = useState();

  const { logedUser } = useAuth();



  const getAllClothings = () => {
    api.get('/getImages').then((response) => {
        setAllClothings([])
        setAllClothings(response.data);
    });
}

const nameTrated = logedUser.name.split(' ')[0]

const renderClothings = () => {
let imageName;

}


useEffect(() => {
  if(logedUser.email === 'pedroaugmed7@gmail.com' && logedUser.password === 'pedrogioc7') {
    setIsAdmin(true)
    } else {
      setIsAdmin(false)
      getAllClothings()
    }
},[logedUser])

  return (
    <C.Container>
      {isAdmin ?  <UploadImage /> : <><C.Title>Bem vindo {nameTrated}</C.Title><Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button></>}
    {allClothings.map((clothing) => <Shirt shirtName={clothing} />)}
      <Button Text="Explore" onClick={() =>   navigate("/Explore")}></Button>
   
  </C.Container>
  );
}


export default Home;
