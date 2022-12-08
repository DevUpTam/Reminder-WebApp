import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { padding } from '@mui/system';


const Item = styled('div')({
  padding: 10,
});



function FormBox() {
  return (
    
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          backgroundColor: 'whitesmoke',
          boxShadow: 1,
        }}
      >
        <Grid>
          <Item sx={{paddingTop:10, paddingLeft:5, paddingRight:5}}><h1 className="display-6">Log In</h1></Item>
          <Item sx={{paddingTop:10, paddingLeft:5, paddingRight:5}}><TextField fullWidth label="User Name" id="username" /></Item>
          <Item sx={{paddingTop:3, paddingLeft:5, paddingRight:5 }}><TextField fullWidth label="Password" id="password" /></Item>
          <Item sx={{paddingTop:7, paddingLeft:5, paddingRight:5, paddingBottom:10}}><Button variant="outlined" fullWidth="true" color='success'>Sign In</Button> </Item>
        </Grid>
          
      </Box>
      
  );
}

export default FormBox;