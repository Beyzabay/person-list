import React from 'react'
import PhotoList from './PhotoList'
import ExpandablePanel from './ExpandablePanel'
import { GoTrash } from "react-icons/go";
import {useRemoveAlbumMutation} from '../store'
import { CircularProgress } from '@mui/material';


function AlbumListItem({album}) {

  const [removeAlbum, results] = useRemoveAlbumMutation();  

  const handleClick = () => {
    removeAlbum(album);
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
      {album.title}
      </>
    )

  return <div>
      <ExpandablePanel header={header}>
        <PhotoList album={album}/>
      </ExpandablePanel>
    </div>
  
}

export default AlbumListItem