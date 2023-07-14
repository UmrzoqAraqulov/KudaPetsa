import { Link } from "react-router-dom";

import image from "../assets/images/logo.png";
import phonlogo from "../assets/images/phone.png";
import locationlogo from "../assets/images/location.png";
import facebooklogo from "../assets/images/facebook.png";
import instalogo from "../assets/images/insta.png";

const Footer = () => {
  return (
    <div className="container lg:w-11/12 mx-auto">
      <div className="flex justify-between  p-4 flex-wrap gap-y-3">
        <div className="flex flex-col justify-between">
          <div className="flex gap-4 z-0">
            <img src={image} alt="" />
            <h3 className="text-xl font-semibold">Куда пицца</h3>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Куда пицца</h3>
          <ul>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                О компании
              </Link>
            </li>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                Пользовательское соглашение
              </Link>
            </li>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                Условия гарантии
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Помощь</h3>
          <ul>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                Ресторан
              </Link>
            </li>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                Контакты
              </Link>
            </li>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                Поддержка
              </Link>
            </li>
            <li className="text-base py-2">
              <Link className="hover:text-blue-400" hrefLang="#">
                Отследить заказ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Контакты</h3>
          <ul>
            <li className="flex gap-2 items-center cursor-pointer my-3 text-base hover:text-blue-500">
              <img className="h-4" src={phonlogo} alt="" />
              <p>+7 (926) 223-10-11</p>
            </li>
            <li className="flex gap-2 items-center cursor-pointer my-3 text-base hover:text-blue-500">
              <img className="h-4" src={locationlogo} alt="" />
              <p>Москва, ул. Юных Ленинцев, д.99</p>
            </li>
            <li className="flex gap-2 items-center cursor-pointer my-3 text-base">
              <div className="flex items-center gap-2 hover:text-blue-700">
                <img className="h-4" src={facebooklogo} alt="" />
                <p>Facebok</p>
              </div>
              <div className="flex items-center gap-2 hover:text-pink-500">
                <img className="h-4" src={instalogo} alt="" />
                <p>Instagram</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-xs pb-3">© Copyright 2021 — Куда Пицца</p>
    </div>
  );
};

export default Footer;
