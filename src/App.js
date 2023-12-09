import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Cust from "./components/cust"
import Products from "./components/products"
import Sales from "./components/sales"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NewCust from "./components/newCust";
import UpdateCust from "./components/updateCust";
import NewProduct from "./components/newProduct";
import UpdateProduct from "./components/updateProduct";

function App() {
    return (
        <div className={"App bg-warning"}>
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path={"/home"} element={<Home/>}/>
                    <Route exact path={"/cust"} element={<Cust/>}/>
                    <Route exact path={"/products"} element={<Products/>}/>
                    <Route exact path={"/sales"} element={<Sales/>}/>
                    <Route exact path={"/addCust"} element={<NewCust/>}/>
                    <Route exact path={"/updateCust/:id"} element={<UpdateCust/>}/>
                    <Route exact path={"/addProduct"} element={<NewProduct/>}/>
                    <Route exact path={"/updateProduct/:id"} element={<UpdateProduct/>}/>
                    <Route exact path={"*"} element={<NotFound/>}/>
                </Routes>
            </Router>


        </div>
    );
}

export default App;
