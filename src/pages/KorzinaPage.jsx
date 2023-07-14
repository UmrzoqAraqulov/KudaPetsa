import { useContext } from "react";
import { korzinaContext } from "../context/KorzinaContext";
import KorzinaCard from "../components/KorzinaCard";
import Button from "../components/Button";
import image from "../assets/images/emptyKorzina.png";

const KorzinaPage = () => {
  const { korzinaProducts } = useContext(korzinaContext);
  let total = 0;
  return (
    <div>
      <div>
        {korzinaProducts.length !== 0 ? (
          korzinaProducts.map((el) => {
            total += el.price * el.quantity;
            console.log(total);
            return <KorzinaCard key={el.id} {...el} />;
          })
        ) : (
          <div className="w-full text-center mb-8">
            <img
              src={image}
              className="mx-auto inline-block my-3 w-60"
              alt=""
            />
            <h2 className="font-semibold text-2xl my-3">
              Заказ №310202 принят
            </h2>
            <p style={{ width: "500px" }} className="mx-auto pb-3">
              Спасибо за заказ! Примерное время доставки 45 минут. Статус
              отследить можно нажав на кнопку ниже
            </p>
            <Button text="Отследить заказ" />
          </div>
        )}
      </div>
      {total !== 0 ? (
        <div className="font-semibold w-2/3 mx-auto bg-white my-2 p-5 rounded-md text-3xl text-center text-orange-500">
          <h2>Total Price: {total} ₽</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default KorzinaPage;
