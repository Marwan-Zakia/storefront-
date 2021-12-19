import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Products from ".//prodects";
export const Categories = ({ items }) => {
  const [activeItems, setActiveItems] = React.useState("all");
  const makeCategoriesBtn = () => {
    const btn = [];
    const cat = [];
    items.forEach((item, i) => {
      if (!cat.includes(item.category)) {
        cat.push(item.category);
        btn.push(
          <ButtonGroup variant="text" aria-label="text button group" key={i}>
            <Button
              key={item.category}
              onClick={() => setActiveItems(item.category)}
            >
              {item.category}
            </Button>
          </ButtonGroup>
        );
      }
    });
    btn.push(
      <ButtonGroup variant="text" aria-label="text button group" key={"all"}>
        <Button key={"all"} onClick={() => setActiveItems("all")}>
          All
        </Button>
      </ButtonGroup>
    );
    return [btn, cat];
  };
  const makeCat = (cat) => {
    if (cat === "all") return items;
    return items.filter((item) => item.category === cat);
  };
  const [btn] = makeCategoriesBtn();
  return (
    <div>
      <Container maxWidth="xl">
        <h1>Browse our Categories</h1>
        {btn}
        <Grid container spacing={2}>
          {makeCat(activeItems).map((item, i) => (
            <Products {...item} key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
