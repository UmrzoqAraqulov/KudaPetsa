import { products } from "../data/data";
import PropTypes from "prop-types";

import filter from '../assets/images/Filter.png'
import Card from './Card';

const Category = ({title}) => {
  let category = products.filter((product) => product.category === title) || [];

  return (
    <div id="pizza" className="py-4">
      <div className="flex justify-between py-4">
        <h2 className="font-semibold text-4xl">{title}</h2>
          {title === "Пицца" || title === "Суши"? <div className="bg-white py-1 px-3 rounded-md flex items-center gap-1">
          <img src={filter} alt="" className="h-5 w-4" />
          <select
            name="filter"
            style={{ border: "1px solid #9c9797" }}
            className="bg-transparent px-2 rounded py-0.5"
          >
            <option value="all">All</option>
            <option value="xit">Xit</option>
            <option value="new">New</option>
          </select>
        </div>:""}
       
      </div>
      <div className="cart grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {category.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

Category.propTypes = {
  title: PropTypes.string,
};
export default Category;