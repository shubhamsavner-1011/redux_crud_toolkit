import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector,useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import { getPost } from '../../Feature/postSlice';

export const AddItem = () => {

    const [id, setItem] = useState()

    const {loading,post} = useSelector(state=>({...state.todo}))
  
    const dispatch = useDispatch()
  
  const handleChange = (event) =>{
    event.preventDefault();
    dispatch(getPost({id}))
    setItem("")
  }
  
    return (
    <div>
    <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Add Item..." 
      type="number"
      onChange={(e)=>(setItem(e.target.value))}
      value={id}
      />
      <Button variant="contained" color="primary" onClick={handleChange}>
      Add Item 
    </Button>
    </form>
  
    </div>
  )
}
