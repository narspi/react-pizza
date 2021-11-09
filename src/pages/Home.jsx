import React, { useEffect } from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../componens";
import { useSelector, useDispatch } from "react-redux";
import { setCategory,setSortBy } from "../redux/action/filters";
import { fetchPizzaz } from "../redux/action/pizzaz";
import { addPizzaToCart } from "../redux/action/cart";

const categoriesNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sotrPopUpNames = [
  { type: "rating", name: "популярности" },
  { type: "price", name: "цене" },
  { type: "name", name: "алфавиту" },
];

function Home() {
  const dispatch = useDispatch();

  const disaptchCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const dispatchSortPopup = React.useCallback((value) => {
    dispatch(setSortBy(value))
  }, [dispatch]);

  const { pizzaz, filters, cart } = useSelector((data) => {
    return data;
  });


  const { items, isLoaded } = pizzaz;
  const { category, sortBy } = filters;

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  }

  useEffect(() => {
    dispatch(fetchPizzaz(filters));
  }, [dispatch,filters]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={disaptchCategory}
          items={categoriesNames}
          activeCategory={category}
        />
        <SortPopup
          items={sotrPopUpNames}
          onClickItem={dispatchSortPopup}
          activeSortPopupItem={sortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} addPizza={cart.items[obj['id']]} />)
          : Array(8)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={`key_${index}`} />)}
      </div>
    </div>
  );
}

export default Home;
