import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { korzinaContext } from "../context/KorzinaContext";

const NavMenu = () => {
  let location = useLocation();
  location = location.pathname.split("/")[1];
  const {korzinaProducts} = useContext(korzinaContext);
  return (
    <div className=" flex items-center justify-between py-3 container lg:w-11/12 mx-auto">
      <div className="flex gap-2 items-center">
        <img src={logo} className="h-8" alt="" />
        <h3 className="text-lg font-semibold">Куда пицца</h3>
      </div>
      {location ? (
        <ul className="flex gap-3">
          <li className="text-base hover:text-blue-500">
            <Link to="#">Акции</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Пицца</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Суши</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Напитки</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Закуски</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Комбо</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Десерты</Link>
          </li>
          <li className="text-base hover:text-blue-500">
            <Link to="#">Соусы</Link>
          </li>
          <li className="text-base hover:text-blue-500 cursor-pointer flex items-center gap-1">
            <p>Другое</p> <i className="fa-solid fa-chevron-down text-sm"></i>
            {/* <i className="fa-solid fa-chevron-up"></i> */}
          </li>
        </ul>
      ) : (
        ""
      )}

      <Link
        to="/korzina"
        className="flex items-center text-base gap-2 bg-orange-600 text-white py-1.5 px-5 rounded"
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <p>{korzinaProducts.length}</p>
      </Link>
    </div>
  );
};

export default NavMenu;
