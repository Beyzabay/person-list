import React from 'react'
import { useFetchUsersQuery, useAddUsersMutation } from '../store'
import { Skeleton } from '@mui/material';
import UsersListItem from './UsersListItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function UserList() {
  const {data, isError,isFetching} = useFetchUsersQuery();
  const [addUser, results] = useAddUsersMutation();

  const handleUserAdd = () => {
  addUser();
  }

  let content;
  if(isFetching){
    content = (
      <Skeleton variant='rectangular' sx={{width:'100%', height:'600px'}}/>
    )
  }
  else if(isError){
    content = <div>Hata var</div>
  }else{
    content = data.map((user)=>{
      return <UsersListItem key={user.id} user={user}/>
    })
  }

  return (
    <div>
      <div className='topArrangement'>
        <h1 sx={{fontSize: '20px'}}>Kişiler</h1>
        <Button variant='outlined' onClick={handleUserAdd}>
          {results.isLoading ? (
            <CircularProgress/>
          ): <span>Kişi Ekle +</span>}
           </Button>
      </div>
      
      {content}</div>
  )
}

export default UserList