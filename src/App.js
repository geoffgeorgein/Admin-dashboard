
import React from "react";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from './pages/list/List';
import Single from './pages/single/Single';
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import { productInputs, userInputs } from "./formsource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
        <Routes>

          <Route path='/'>
            
            <Route index element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='users'>

                <Route index element={<List/>}></Route>
                <Route path=':userId' element={<Single/>}></Route>
                <Route path='new' element={<New inputs={userInputs} title="Add new user"/>}></Route>

            </Route>

            <Route path='products'>

                <Route index element={<List/>}></Route>
                <Route path=':productId' element={<Single/>}></Route>
                <Route path='new' element={<New inputs={productInputs} title="Add new product" />}></Route>

            </Route>
            <Route path='new' element={<New/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
