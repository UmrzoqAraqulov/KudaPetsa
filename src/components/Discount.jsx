import firstImage from '../assets/images/discountImg1.png'
import secondImg from '../assets/images/discountImg2.png'

const Discount = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="flex flex-col justify-between rounded-md bg-orange-500 gap-5 text-white text-lg">
        <img src={firstImage} alt="" className="w-64 rounded-t-md " />
        <p className="py-2 px-4">3 средние пиццы <br /> от 999 рублей</p>
      </div>
      <div className="flex flex-col justify-between rounded-md gap-5 bg-red-500 text-white text-lg">
        <img src={secondImg} alt="" className="w-64 rounded-t-md pt-14" />
        <p className="py-2 px-4">Кэшбек 10% на <br /> самовывоз (доставка)</p>
      </div>
      <div className="flex flex-col justify-between rounded-md bg-orange-500 gap-5 text-white text-lg">
        <img src={firstImage} alt="" className="w-64 rounded-t-md " />
        <p className="py-2 px-4">3 средние пиццы <br /> от 999 рублей</p>
      </div>
      <div className="flex flex-col justify-between rounded-md gap-5 bg-red-500 text-white text-lg">
        <img src={secondImg} alt="" className="w-64 rounded-t-md pt-14" />
        <p className="py-2 px-4">Кэшбек 10% на <br /> самовывоз (доставка)</p>
      </div>
    </div>
  );
}

export default Discount