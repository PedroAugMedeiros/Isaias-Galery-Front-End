import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
// import Axios from "axios";
import UploadImage from "../../components/UploadImage";
import Button from "../../components/Button";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  // const [, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  const { logedUser } = useAuth();

//   const getLogedUser = (email) => {
//     Axios.get(`http://localhost:9000/getUser/${email}`,).then((response) => {
//         setUser(response.data);
//     });
// }

const nameTrated = logedUser.name.split(' ')[0]

useEffect(() => {
  if(logedUser.email === 'pedroaugmed7@gmail.com' && logedUser.password === 'pedrogioc7') {
    setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
},[logedUser])

  return (
    <C.Container>
      {isAdmin ?  <UploadImage /> : <><C.Title>Bem vindo {nameTrated}</C.Title><Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button></>}
   
  </C.Container>
  );
};

export default Home;
