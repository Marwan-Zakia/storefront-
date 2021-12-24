import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { initialize } from "./components/action";
import ButtonAppBar from "./components/header";
import FixedBottomNavigation from "./components/footer";
import Categories from "./components/main";
// import fakerData from "./components/faker";
import faker from "faker";
import { If, Then, Else } from "react-if";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionAreaCard from "./components/proddet";
import ShoppingCart from "./components/shopcarts";
const App = ({ cart, initialize }) => {
  const [isReadyForShopping, setIsReadyForShopping] = React.useState(false);

  return (
    <BrowserRouter>

      <ButtonAppBar />
 
      <Routes>
      <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product/:id" element={<ActionAreaCard />} />
        <Route  path="/"
          element={
      <If condition={isReadyForShopping}>
        <Then>
          <Categories  />
        </Then>
        <Else>
          <Button
            variant="contained"
            onClick={() => {
              initialize({ id: faker.datatype.uuid() });
              setIsReadyForShopping(true);
            }}
          >
            Start Shopping!
          </Button>
        </Else>
      </If>
          }
    />
      </Routes>
      <FixedBottomNavigation />

    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { initialize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
