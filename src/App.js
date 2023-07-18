import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import DeleteIcon from '@mui/icons-material/DeleteIcon';
// import AddIcon from '@mui/icons-material/AddIcon';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import moment from 'moment



function renderRow() {
 
  return (
    <ListItem  component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={"Transaction"} />
      </ListItemButton>
    </ListItem>
  );
}

function appBarLabel(label) {
  return (
    <Toolbar>
      {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

//Get current date and time

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};



const Budget = () => {

  const initialTransaction = [
    { Acion: "",
      Datatime: "",
     Balance: (0)}
   ];
   const date = new Date(); // Assuming you want to format the current date and time
   const formattedDate = formatDate(date);
   const [values, setValues] = useState('');
   const [balance, setBalance] = useState(0);
   const [Transaction,setTransaction] = useState(initialTransaction)
   // "Datetime": ' ',
 
   const handleChange = (event) => {
     setValues(event.target.value);
   };
 
   const handleSubmit = (event) => {
     event.preventDefault();
     setBalance(parseInt(values));
     setValues('');
   };
 
   const handleAdd = (event) => {
    event.preventDefault();
     setBalance((prevBalance) => prevBalance + parseInt(values));
    //  setTransaction((prevTransaction) => [
    //    ...prevTransaction,
    //    {"action": "Add", "Balance Amount":{balance}}
    //  ]);
     setValues('');
    //  moment(date).format('YYYY-MM-DD')
     console.log("Transaction",Transaction)
     console.log("date",formattedDate);
   };

   useEffect(() => {
    setTransaction((prevTransaction) => [
      ...prevTransaction,
      {"action": "Add","Datatime":{formattedDate}, "Balance":{balance}}
    ]);
    console.log("Transaction", Transaction);
  }, [balance]);
  
   // "Datatime":Date(),
 
   const handleRemove = (event) => {
    event.preventDefault();
     setBalance((prevBalance) => prevBalance - parseInt(values));
     setValues('');
     console.log("Transaction",Transaction)
   };
   useEffect(() => {
    setTransaction((prevTransaction) => [
      ...prevTransaction,
      {"action": "Remove","Datatime":{formattedDate}, "Balance":{balance}}
    ]);
    console.log("Transaction", Transaction);
  }, [balance]);
 

  return (    
  
<div>
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="relative" color="primary">
          {appBarLabel('Expence Tracker')}
        </AppBar>
      </ThemeProvider>
    </Stack>




<div style={{ display: "flex", justifyContent: "center" }}>

      {/* First Card */}
      <Card sx={{ minWidth: 400, mr: 2 }}>
        <CardContent>
           {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        </FormControl> */}
        <FormControl onSubmit={handleSubmit} fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Balance</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$ {balance}</InputAdornment>}
            label="Amount"
          />
          {/* <Button size="small" type='submit' variant="contained" color="success">ADD</Button>   */}
        </FormControl>
        <TextField id="filled-basic" onChange={handleChange} label="Enter the Amount" variant="filled">
          </TextField>
        </CardContent>
        <CardActions>
          <Button size="small" type='submit' onClick={handleAdd} variant="contained" color="success">ADD</Button>                                   
          <Button size="small" onClick={handleRemove} variant="outlined" color="error" >Remove</Button>
        </CardActions>
      </Card>

      {/* Second Card */}
      <Card sx={{ minWidth: 400, ml: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Transaction value:</b>
            <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={10}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
          
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}

export default Budget;


// startIcon={<AddIcon/>}    startIcon={<DeleteIcon/>}
