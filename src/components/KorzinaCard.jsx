import PropTypes from "prop-types";
import { useContext } from "react";
import { korzinaContext } from "../context/KorzinaContext";

const KorzinaCard = ({ id, image, name, description, quantity, price }) => {
  const { increase, decrease } = useContext(korzinaContext);
  return (
    <div className="flex items-center justify-between w-2/3 bg-white my-5 p-3 rounded-lg mx-auto">
      <div className="flex items-center gap-5">
        <img src={image} className="h-28" alt="" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex rounded-mditems-center items-center">
          <div
            onClick={() => decrease(id)}
            className="bg-orange-300 py-1 px-3 rounded-l-md cursor-pointer"
          >
            -
          </div>
          <div className="bg-orange-200 py-1 px-3">{quantity}</div>
          <div
            onClick={() => increase(id)}
            className="bg-orange-300 py-1 px-3 rounded-r-md cursor-pointer"
          >
            +
          </div>
        </div>
        <p className="text-orange-500 text-xl font-semibold">{price} ₽</p>
      </div>
    </div>
  );
};

KorzinaCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.number,
};

export default KorzinaCard;
