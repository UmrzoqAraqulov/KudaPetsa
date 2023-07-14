import image from "../assets/images/locationNav.png";

const NavBar = () => {
  return (
    <div className="container lg:w-11/12 flex items-center justify-between mx-auto py-3">
      <div className="flex gap-5">
        <div className="items-center flex gap-2">
          <img src={image} alt="" className="h-5" />
          <select
            name="states"
            className="rounded bg-gray-50 outline-none hover:cursor-pointer hover:bg-gray-50 w-24"
          >
            <option className="bg-gray-100" value="moskva">
              Москва
            </option>
            <option className="bg-gray-100" value="peter">
              Петербург
            </option>
            <option className="bg-gray-100" value="postov">
              Ростовская{" "}
            </option>
          </select>
        </div>
        <p className="cursor-pointer">Проверить адрес</p>
        <p>
          Среднее время доставки*:{" "}
          <span className="font-semibold">00:24:19</span>
        </p>
      </div>
      <div className="flex">
        <p>Время работы: с 11:00 до 23:00</p>
        <p>Войти в аккаунт</p>
      </div>
    </div>
  );
};

export default NavBar;
