import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Alert } from "@mui/material";
export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <Grid
      marginTop={5}
      container
      spacing={2}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Grid item>
        <Card sx={{ maxWidth: 1000 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell component="th" align="left">
                    quantity
                  </TableCell>
                  <TableCell component="th" align="right">
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">
                      {row.name}
                      <Box
                        maxWidth={156}
                        maxHeight={18}
                        overflow={"clip"}
                        fontSize={13}
                      >
                        {row.description}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="right">
                      ${row.price * row.quantity}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow
                  key={"tot"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell scope="row">Total</TableCell>
                  <TableCell scope="row">
                    {items.reduce((acc, { quantity }) => quantity + acc, 0)}
                  </TableCell>
                  <TableCell align="right">
                    $
                    {items.reduce(
                      (acc, { price, quantity }) => price * quantity + acc,
                      0
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
      <Grid alignItems={"flex-start"} display={"flex"} flexDirection={"row"}>
        <Grid
          alignItems={"flex-start"}
          display={"flex"}
          flexDirection={"column"}
        >
          <TextField required id="outlined-required" defaultValue="full name" />
          <TextField required id="outlined-required" defaultValue="address" />
          <TextField required id="outlined-required" defaultValue="City" />
        </Grid>
        <Grid display={"flex"} alignItems={"flex-end"} flexDirection={"column"}>
          <TextField id="outlined-read-only-input" defaultValue="credit card" />
          <TextField id="outlined-number" type={"date"} />
          <TextField id="outlined-helperText" label="cvv" defaultValue="cvv" />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        type="reset"
        onClick={() => {
          dispatch({ type: "CLEAR" });
          handleClick();
        }}
      >
        Pay 💹
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          sold!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
