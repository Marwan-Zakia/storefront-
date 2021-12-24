import { Button, ButtonGroup} from "@mui/material";
import React from 'react'

export const makeCategoriesBtn = (data,setActiveItems) => {
    const btn = [];
    const cat = [];
    data.forEach((item, i) => {
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

  export const makeCat = (data,cat) => {
    if (cat === "all") return data;
    return data.filter((item) => item.category === cat);
    };
