import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../componens";
import { useSelector,useDispatch } from "react-redux";
import { setCategory } from "../redux/action/filters";

const categoriesNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

function Home() {
  const dispatch = useDispatch();


  const disaptchCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[dispatch]);


  const items = useSelector(({pizzaz})=>{
    return pizzaz.items
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem = {disaptchCategory}
          items={categoriesNames}
        />
        <SortPopup items={
          [
            {type: "Popular" , name: "популярности"},
            {type: "Price" , name: "цене"}, 
            {type: "Alphabet" , name: "алфавиту"}            
          ]
        } />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items && items.map(obj=><PizzaBlock key={obj.id} {...obj} />)
        }
      </div>  
    </div>
  );
}

export default Home;




