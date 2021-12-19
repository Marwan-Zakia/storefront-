import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { newCart } from "./components/action";
import ButtonAppBar from "./components/header";
import FixedBottomNavigation from "./components/footer";
import Categories from "./components/main";
import faker from "faker";
const App = ({ cart, newCart }) => {
  const [isReadyForShopping, setIsReadyForShopping] = React.useState(false);

  return (
    <div>
      <ButtonAppBar />

      {isReadyForShopping === false ? (
        <Button
          variant="contained"
          onClick={() => {
            newCart({ id: faker.datatype.uuid() });
            setIsReadyForShopping(true);
          }}
        >
          Start Shopping!
        </Button>
      ) : (
        <Categories />
      )}
     

      <FixedBottomNavigation />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { newCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
