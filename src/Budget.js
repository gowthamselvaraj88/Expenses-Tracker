// import { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// // import DeleteIcon from '@mui/icons-material/DeleteIcon';
// // import AddIcon from '@mui/icons-material/AddIcon';
// // import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// // import Input from '@mui/material/Input';
// // import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// // import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// // import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { FixedSizeList } from 'react-window';


// function renderRow() {
 
//   return (
//     <ListItem  component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }


// const Budget = () => {

//   const initialtransion = [
//     { Acion: "",
//      Balance: (0)}
//    ];
//    const [values, setValues] = useState('');
//    const [balance, setBalance] = useState(0);
//    const [transion,setTransion] = useState(initialtransion)
//    // "Datetime": ' ',
 
//    const handleChange = (event) => {
//      setValues(event.target.value);
//    };
 
//    const handleSubmit = (event) => {
//      event.preventDefault();
//      setBalance(parseInt(values));
//      setValues('');
//    };
 
//    const handleAdd = () => {
//      setBalance((prevBalance) => prevBalance + parseInt(values));
//      setTransion((prevtransion) => [
//        ...prevtransion,
//        {"action": "Add", "Balance Amount":{balance}}
//      ]);
//      setValues('');
//      console.log("transion",transion)
//    };
  
//    // "Datatime":Date(),
 
//    const handleRemove = () => {
//      setBalance((prevBalance) => prevBalance - parseInt(values));
//      setTransion((prevtransion) => [
//        ...prevtransion,
//        {"action": "Remove", "Balance Amount":{balance}}
//      ]);
//      setValues('');
//      console.log("transion",transion)
//    };
 

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>

// {/* <div className="App">
//         <form onSubmit={handleSubmit}>
//           <label>Balance: {balance}</label>
//           <input type='number' value={values} onChange={handleChange} />
//           <button type="submit"></button>
//         </form>
//         <div><button onClick={handleAdd}>ADD</button>
//         <button onClick={handleRemove}>REMOVE</button></div>
        
//        {/* <div><ul> <il>Transion: {transion}</il></ul></div>  */}
     
//     {/* </div> */} 








//       {/* First Card */}
//       <Card sx={{ minWidth: 400, mr: 2 }}>
//         <CardContent>
//            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//         </FormControl>
//         <FormControl onSubmit={handleSubmit} fullWidth sx={{ m: 1 }}>
//           <InputLabel htmlFor="outlined-adornment-amount">Balance</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             startAdornment={<InputAdornment position="start">$ {balance}</InputAdornment>}
//             label="Amount"
//           />
//           {/* <Button size="small" type='submit' variant="contained" color="success">ADD</Button>   */}
//         </FormControl>
//         <TextField id="filled-basic" onChange={handleChange} label="Enter the Amount" variant="filled">
//           </TextField>
//         </CardContent>
//         <CardActions>
//           <Button size="small" type='submit' onClick={handleAdd} variant="contained" color="success">ADD</Button>                                   
//           <Button size="small" onClick={handleRemove} variant="outlined" color="error" >Remove</Button>
//         </CardActions>
//       </Card>

//       {/* Second Card */}
//       <Card sx={{ minWidth: 400, ml: 2 }}>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             <b>Transion value:</b>
//             <Box
//       sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
//     >
//       <FixedSizeList
//         height={400}
//         width={360}
//         itemSize={46}
//         itemCount={10}
//         overscanCount={5}
//       >
//         {renderRow}
//       </FixedSizeList>
//     </Box>
          
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Budget;


// // startIcon={<AddIcon/>}    startIcon={<DeleteIcon/>}







// import { useState } from 'react';
// import './App.css';

// function App() {

//   const initialtransion = [
//    { Acion: "",
//     Balance: (0)}
//   ];
//   const [values, setValues] = useState('');
//   const [balance, setBalance] = useState(0);
//   const [transion,setTransion] = useState(initialtransion)
//   // "Datetime": ' ',

//   const handleChange = (event) => {
//     setValues(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setBalance(parseInt(values));
//     setValues('');
//   };

//   const handleAdd = () => {
//     setBalance((prevBalance) => prevBalance + parseInt(values));
//     setTransion((prevtransion) => [
//       ...prevtransion,
//       {"action": "Add", "Balance Amount":{balance}}
//     ]);
//     setValues('');
//     console.log("transion",transion)
//   };
 
//   // "Datatime":Date(),

//   const handleRemove = () => {
//     setBalance((prevBalance) => prevBalance - parseInt(values));
//     setTransion((prevtransion) => [
//       ...prevtransion,
//       {"action": "Remove", "Balance Amount":{balance}}
//     ]);
//     setValues('');
//     console.log("transion",transion)
//   };

//   return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//           <label>Balance: {balance}</label>
//           <input type='number' value={values} onChange={handleChange} />
//           <button type="submit"></button>
//         </form>
//         <div><button onClick={handleAdd}>ADD</button>
//         <button onClick={handleRemove}>REMOVE</button></div>
        
//        {/* <div><ul> <il>Transion: {transion}</il></ul></div>  */}
     
//     </div>
//   );
// }

// export default App;
