import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ShoppingBasketTwoTone } from '@material-ui/icons';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  color="inherit" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
           OUR SOTRE
          </Typography>
        
          <Button  color="inherit" icon={<ShoppingBasketTwoTone/>}  > <ShoppingBasketTwoTone/>        </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}