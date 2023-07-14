import { PropTypes } from "prop-types";
import { products } from "../data/data";
import { KORZINA } from "../const/const";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const korzinaContext = createContext();

const KorzinaContext = ({ children }) => {
  const [korzinaProducts, setKorzinaProducts] = useState(
    JSON.parse(localStorage.getItem(KORZINA)) || []
  );

  const setLocalStorage = (newProdaucts) => {
    setKorzinaProducts(newProdaucts);
    localStorage.setItem(KORZINA, JSON.stringify(newProdaucts));
  };

  const addProducts = (id) => {
    const product = products.find((el) => el.id === id);
    const check = korzinaProducts.find((el) => el.id === id);
    let newProdaucts;
    if (check) {
      increase(id);
      return;
    } else {
      newProdaucts = [...korzinaProducts, { ...product, quantity: 1 }];
      toast("Product added to shopping");
    }
    setLocalStorage(newProdaucts);
  };

  const increase = (id) => {
    let newProdaucts = korzinaProducts.map((pr) => {
      if (pr.id === id) {
        pr.quantity += 1;
      }
      return pr;
    });
    toast.success("Product quantity update in Shopping");
    setLocalStorage(newProdaucts);
  };

  const decrease = (id) => {
    const product = korzinaProducts.find((el) => el.id === id);
    let newProdaucts;
    if (product.quantity > 1) {
      newProdaucts = korzinaProducts.map((pr) => {
        if (pr.id === id) {
          pr.quantity -= 1;
        }
        return pr;
      });
    } else {
      newProdaucts = korzinaProducts.filter((pr) => pr.id !== id);
    }
    toast.success("Product quantity update in Shopping");
    setLocalStorage(newProdaucts);
  };

  const newState = { korzinaProducts, addProducts, increase, decrease };

  return (
    <korzinaContext.Provider value={newState}>
      {children}
    </korzinaContext.Provider>
  );
};

KorzinaContext.propTypes = {
  children: PropTypes.node,
};

export default KorzinaContext;
