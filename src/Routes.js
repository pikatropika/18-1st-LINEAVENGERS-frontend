import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MyPage from "./Pages/MyPage/MyPage";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import ShoppingBasket from "./Pages/MyPage/ShoppingBasket/ShoppingBasket";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/shoppingbasket" component={ShoppingBasket} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
