import PropTypes from "prop-types";
import { useContext } from "react";
import { korzinaContext } from "../context/KorzinaContext";

const Button = ({ text,id }) => {
  const {addProducts} = useContext(korzinaContext)

  return (
    <div onClick={()=>addProducts(id)} className="inline-block bg-orange-500 text-white text-base py-2 px-5 rounded-md cursor-pointer">
      {text}
    </div>
  );
};

Button.propTypes={
  id:PropTypes.string,
  text:PropTypes.string,
}

export default Button;
