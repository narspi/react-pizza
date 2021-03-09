import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./componens";
import { Home,Cart } from "./pages";
import axios from 'axios';
import {connect} from "react-redux";
import setPizzaz from './redux/action/pizzaz';

// const App = ({ setPizzaz }) => {
//   React.useEffect(()=>{
//     axios.get('http://localhost:3000/db.json').then(({data})=>{
//       setPizzaz(data.pizzas); 
//     });
//   },[]);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/"  exact >
//           <Home  />
//         </Route>
//         <Route path="/cart" component={Cart} exact/>
//       </div>
//     </div>
//   );
// };


class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      this.props.changePizzaz(data.pizzas)
    });
  }

  render(){
    console.log(this.props)
    return (
    <div className="wrapper">
       <Header />
       <div className="content">
         <Route path="/" exact>
           <Home items={this.props.items}/>
         </Route>
         <Route path="/cart" component={Cart} exact/>
       </div>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzaz.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePizzaz: items => dispatch(setPizzaz(items))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
