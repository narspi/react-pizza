import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./componens";
import { Home,Cart } from "./pages";
import axios from 'axios';
import {connect} from "react-redux";

const App = ({  }) => {
  React.useEffect(()=>{
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      console.log(data);
      // setPizzaz(data.pizzas); 
    });
  },[]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/"  exact >
          <Home  />
        </Route>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.pizzaz.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzaz: items => dispatch(setPizzaz(items))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
