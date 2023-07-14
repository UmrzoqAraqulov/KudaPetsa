import PropTypes from "prop-types";
import Button from './Button'

const Card = ({id, image, name, description, price ,filter}) => {
  return (
    <div className="bg-white rounded-md relative">
      <img src={image} alt="" />
      <div className="pt-2 pb-4 px-4">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="py-2">{description}</p>
        <div className="flex justify-between items-center">
          <Button text="Выбрать" id={id}/>
          <p className="text-orange-500">от {price} ₽</p>
        </div>
        {filter ? (
          <div className="absolute top-3 left-0 px-3 rounded-r py-1 bg-red-600">{filter}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  id:PropTypes.string,
  image:PropTypes.string,
  name:PropTypes.string,
  description:PropTypes.string,
  price:PropTypes.string,
  filter:PropTypes.string,
};

export default Card;
