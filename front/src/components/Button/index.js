import React, {useState} from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <C.Button type={Type} onMouseOver={() => setOnHover(!onHover)} onMouseOut={() => setOnHover(false)} onClick={onClick} className={`${onHover ? 'z-10 border-white transition-transform duration-1000 ease-out scale-105 w-[16%] delay-100' : 'z-0 transition-transform duration-1000 ease-out scale-100 delay-100'}`}>
      {Text}
    </C.Button>
  );
};

export default Button;
