import { Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import DetailCard from './DetailCard';




export const ShowItem = () => {
  const {loading,post} = useSelector(state=>({...state.todo}))

  return (
    <>
    <div>
    
    <Grid container  className='mainDiv'>
      <Grid item xs={12} className='addItem'>
    {loading ?
      <CircularProgress />: <DetailCard/>
    }
      
        </Grid>
      </Grid>
    </div>
    </>
    )
}
