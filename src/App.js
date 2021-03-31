import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Header } from "./componens";
import { Home, Cart } from "./pages";
import axios from "axios";
import { useDispatch } from "react-redux";
import setPizzaz from "./redux/action/pizzaz";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzaz(data.pizzas));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home}  exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzaz.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changePizzaz: (items) => dispatch(setPizzaz(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
