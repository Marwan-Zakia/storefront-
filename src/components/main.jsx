import { Container, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Products from ".//prodects";
import { addItem } from "../components//action";
import { makeCat, makeCategoriesBtn } from "./main.helper";
// import Stack from "@mui/material/Stack";
// import CircularProgress from "@mui/material/CircularProgress";
import api from "..//components/api";
// import { Else, If, Then } from "react-if";
export const Categories = ({ addItem, inv }) => {
  const [categories, setCategories] = React.useState([]);
  const [activeItems, setActiveItems] = React.useState("all");

  const [btn] = makeCategoriesBtn(categories, setActiveItems);
  React.useEffect(() => {
    setTimeout(() => {
      api
      .get("/")
      .then((res) =>
      setCategories(
          res.data.sort(({ id, prvId }) => (id > prvId ? true : false))
        )
      );
    }, 500);
  }, [inv]);

  return (
    <div>
      <Container maxWidth="xl">
        <h1>Browse our Categories</h1>
        {btn}
        <Grid container spacing={2}>
          {makeCat(categories, activeItems).map((item, i) => (
            <Products {...item} key={i} addItem={addItem} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inv: state.cart.items,
});

const mapDispatchToProps = { addItem };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
