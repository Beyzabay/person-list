import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'
import { GoTrash } from "react-icons/go";
import {useRemoveUsersMutation} from '../store'
import { CircularProgress } from '@mui/material';


function UsersListItem({user}) {

  const [removeUser, results] = useRemoveUsersMutation();  

const handleClick = () => {
removeUser(user);
}

  const header = (
    <>
    <button style={{marginRight: '30px', border:'none', cursor:'pointer'}} onClick={handleClick}>
    {results.isLoading ? (
      <CircularProgress style={{width:'20px', height:'20px'}}/>
    ):(
      <GoTrash />
    )}
    </button>
    {user.name}
    </>
  )
  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user}/>
      </ExpandablePanel>
    </div>
  )
}

export default UsersListItem 