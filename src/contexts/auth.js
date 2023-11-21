import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [logedUser, setLogedUser] = useState();
  const [users, setUsers] = useState();
  const token = Math.random().toString(36).substring(2);

  const DEVLINK = "http://localhost:9000";
  const productionlink = 'https://isaias-galery-back-end.onrender.com'; 

  const  getUsers = async () => {
    Axios.get(`${DEVLINK}/getUsers`).then((response) => {
          setUsers(response.data);
        });
  }

  const getUser = (email) => {
    
    Axios.get(`${DEVLINK}/getUser/${email}`).then((response) =>setLogedUser(response.data));
  }

  const signin = (email, password) => {
   
    const hasUser = users?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
       getUser(email)
        
   

        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email, password, name) => {

    getUsers()

    const hasUser = users?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    } else {
      Axios.post("/register", {
        name: name,
        email: email, 
        password: password, 
        clothings: [],
        favoriteClothings: [],
        token: token
      });
      getUsers()
    }
getUsers()
    return;
  };

  const signout = () => {
    setLogedUser(null);
    localStorage.removeItem("user_token");
  };

  useEffect(() => {
   getUsers()
  },[])

  return (
    <AuthContext.Provider
      value={{ logedUser, signed: !!logedUser, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
