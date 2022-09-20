import React from 'react'
import ItemNote from './ItemNote'


function ItemNoteList(props) {
   return (
      <>
         {props.data.map((item, index) => <ItemNote key={!!item.id ? item.id : index} data={item} />)}
      </>
   )
}

export default ItemNoteList;