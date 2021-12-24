import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { initialize } from "./components/action";
import ButtonAppBar from "./components/header";
import FixedBottomNavigation from "./components/footer";
import Categories from "./components/main";
import fakerData from "./components/faker";
import faker from "faker";
import { If, Then, Else } from "react-if";
const App = ({ cart, initialize }) => {
  const [isReadyForShopping, setIsReadyForShopping] = React.useState(false);

  return (
    <div>
      <ButtonAppBar />

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
      <FixedBottomNavigation />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { initialize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
