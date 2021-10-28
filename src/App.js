import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import AddUser from "./components/AddUser/AddUser";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import UpdateUser from "./components/UpdateUser/UpdateUser";
function App() {
  return (
    <div className="text-center">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/addProduct">
            <AddProduct />
          </Route>
          <Route exact path="/addUser">
            <AddUser />
          </Route>
          <Route exact path="/dashBoard">
            <Dashboard />
          </Route>
          <Route exact path="/update/:productId">
            <UpdateUser />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
