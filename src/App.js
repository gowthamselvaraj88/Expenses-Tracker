import { useState, useEffect } from 'react';
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

import InputLabel from '@mui/material/InputLabel';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


//Get current date and time

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const Budget = () => {

  const initialTransaction = [
    {
      Acion: "",
      dateTime: "",
      Balance: (0)
    }
  ];
  const date = new Date(); // Assuming you want to format the current date and time
  const formattedDate = formatDate(date);
  // const [values, setValues] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    console.log('inputValue:', inputValue);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(parseInt(event.target.value));
  }



  const handleAdd = (event) => {

    setBalance((prevBalance) => prevBalance + parseInt(event));


  }


  const handleRemove = (event) => {
    setBalance((prevBalance) => prevBalance - parseInt(event));

  }


  const handleAction = (actionType) => {
    let value = inputValue.toString();
    console.log("value::", value)
    const regex = /^[0-9\b]+$/;
    if (value.trim() !== '' && /^\d+$/.test(value)) {
      let date = formattedDate;
      console.log("date = ", date)
      console.log("date = ", regex);
      console.log("action type :: ", actionType, "value ::", value);

      setTransaction((prevtransaction) => [
        ...prevtransaction,
        { "action": actionType, "dateTime": date, "value": value }
      ]);

      if (actionType === "ADD") {
        handleAdd(value);
      } else {
        handleRemove(value);
      }
      setInputValue("");
      console.log("input value =", inputValue)
    
    }
    else {
      alert(("Enter only Numbers"));
      setInputValue("");

    }

    console.log("value:: end", inputValue)
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })
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



  return (

    <div>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="relative" color="primary">
            {appBarLabel('Expence Tracker')}
          </AppBar>
        </ThemeProvider>
      </Stack>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {/* First Card */}
        <Card sx={{ minWidth: 400, mr: 2 }}>
          <CardContent>
            <InputLabel style={{ fontWeight: 500, color: "black", marginBottom: "20px" }} htmlFor="outlined-adornment-amount">Balance: $ <span>{balance}</span></InputLabel>
            <TextField id="filled-basic" type='number' value={inputValue} onChange={handleChange} label="Enter the Amount" variant="filled">
            </TextField>

          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleAction("ADD")} variant="contained" color="success">ADD</Button>
            <Button size="small" onClick={() => handleAction("REMOVE")} variant="outlined" color="error" >Remove</Button>
          </CardActions>
        </Card>

        {/* Second Card */}
        <Card sx={{ minWidth: 400, ml: 2 }}>
          <CardContent>
            <InputLabel style={{ fontWeight: 500, color: "black" }} htmlFor="outlined-adornment-amount">Transaction Details</InputLabel>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {transaction.map((data) => (
                <ListItem
                  key={data.dateTime}

                >
                  <ListItemText style={{
                    color: data.action === 'ADD' ? 'green' : 'red', fontWeight:400,
                  }} primary={`Action: ${data.action}`} secondary={`Value: ${data.value}, Date: ${data.dateTime}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


export default Budget;


// startIcon={<AddIcon/>}    startIcon={<DeleteIcon/>}
