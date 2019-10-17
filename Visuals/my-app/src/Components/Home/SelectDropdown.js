import React from 'react'

const SelectDropdown = (props) => {
  return (
    <div className="d-flex justify-content-center mb-2">
        <select className="browser-default custom-select" style={{width:300}} onChange={props.change}>
        <option>Choose your Chart</option>
        {
          props.dropdownValues.map((choice,i) => (
            <option key={i} value={choice.value}>{choice.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectDropdown;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles(theme => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// const SelectDropdown = (props) => {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');
//   const [open, setOpen] = React.useState(false);

//   const handleChange = event => {
//     setAge(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div className="d-flex justify-content-center">
//       <form autoComplete="off">
//         <FormControl className={classes.formControl}>
//           <InputLabel htmlFor="demo-controlled-open-select">Choose your Chart</InputLabel>
//           <Select
//             open={open}
//             onClose={handleClose}
//             onOpen={handleOpen}
//             value={age}
//             onChange={props.change}
//             inputProps={{
//               name: 'age',
//               id: 'demo-controlled-open-select',
//             }} style={{width:300}}
//           >
//             {
//               props.dropdownValues.map((choice,i) => (
//                 <MenuItem key={i} value={choice.value}>
//                   {choice.name}
//                 </MenuItem>
//               ))
//             }
//           </Select>
//         </FormControl>
//       </form>
//     </div>
//   );
// }

// export default SelectDropdown;