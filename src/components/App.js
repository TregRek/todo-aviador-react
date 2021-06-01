import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ProductList from './ProductList';
import UserList from './UserList';
import CategoriesInDb from './CategoriesInDb';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>
            <Route path="/" exact={true} component={ContentWrapper}/>
            <Route path="/products" exact={true} component={ProductList}/>
            <Route path="/users" exact={true} component={UserList}/>
            <Route path="/categories" exact={true} component={CategoriesInDb}/>
          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
