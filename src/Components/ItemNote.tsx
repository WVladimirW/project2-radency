import React from 'react'

function ItemNote(props) {
   if (props.data.id) {
      return (
         <div id={props.data.id} className="list-item-notes">
            <div className={"icon-" + props.data.category.toLowerCase().split(' ').join('-')}></div>
            <div className="name">{props.data.name}</div>
            <div className="created">{props.data.created}</div>
            <div className="category">{props.data.category}</div>
            <div className="content">{props.data.content}</div>
            <div className="dates">{props.data.dates}</div>
            <div className="icon-edit"></div>
            <div className="icon-archive"></div>
            <div className="icon-delete"></div>
         </div>
      )
   } else {
      return (
         <div className="summary-list-item-notes">
            <div className={"icon-" + props.data.category.toLowerCase().split(' ').join('-')}></div>
            <div className="summary-category">{props.data.category}</div>
            <div className="summary-active">{props.data.active}</div>
            <div className="summary-archived">{props.data.archived}</div>
         </div>
      )
   }
}

export default ItemNote;