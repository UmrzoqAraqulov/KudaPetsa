import Discount from "../components/Discount"
import Menu from "../components/Menu"
import locationLoga from '../assets/images/locationNav.png'
import Button from "../components/Button";
import Category from "../components/Category";

const HomePage = () => {
  return (
    <div className="container lg:w-11/12 mx-auto">
      <Menu />
      <Discount />
      <div className="flex justify-between py-2 px-6 items-center rounded-md bg-white my-5">
        <p>Проверить адрес доставки</p>
        <div
          style={{ border: "1.5px solid rgb(196, 195, 195)" }}
          className="flex gap-2 items-center py-2 px-4 rounded-lg w-4/6"
        >
          <img src={locationLoga} alt="" className="h-5" />
          <input
            className="outline-none px-2 w-full"
            type="text"
            placeholder="Адрес"
          />
        </div>
        <Button text={"Проверить"} />
      </div>
      <Category title="Пицца" />
      <Category title="Суши" />
      <Category title="Закуски" />
      <Category title="Десерты" />
      <Category title="Напитки" />
      <Category title="Комбо" />
    </div>
  );
}

export default HomePage