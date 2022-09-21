import ItemNote from './ItemNote'


function ItemNoteList(props: any) {
   return (
      <>
         {props.data.map((item: any, index: any) => <ItemNote key={!!item.id ? item.id : index} data={item} />)}
      </>
   )
}

export default ItemNoteList;