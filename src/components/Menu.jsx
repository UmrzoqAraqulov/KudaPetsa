import { Link } from "react-router-dom";
import {
  pizza,
  discount,
  sushi,
  combo,
  sauce,
  dessert,
  drink,
  snacks,
} from "./ImageMenu";

const Menu = () => {
  return (
    <ul className="flex justify-between my-5">
      <li >
        <Link className="bg-white py-2 rounded-md hover:scale-105 px-6 flex flex-col text-red-700 hover:text-blue-500 items-center gap-1" to="#dicount">
          <img src={discount} alt="" /> <p>Акции</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#pizza">
          <img src={pizza} alt="" /> <p>Пицца</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#sushi">
          <img src={sushi} alt="" /> <p>Суши</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#drink">
          <img src={drink} alt="" /> <p>Напитки</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#snacks">
          <img src={snacks} alt="" /> <p>Закуски</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#combo">
          <img src={combo} alt="" /> <p>Комбо</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#dessert">
          <img src={dessert} alt="" /> <p>Десерты</p>
        </Link>
      </li>
      <li>
        <Link className="bg-white py-2 rounded-md px-6 hover:scale-105 flex flex-col hover:text-blue-500 items-center gap-1" to="#sauce">
          <img src={sauce} alt="" /> <p>Соусы</p>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
