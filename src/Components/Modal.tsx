import { useState } from "react"
import store from '../store/state'

function Modal(props: any) {
   const [note, setNote] = useState({
      id: props.data.editNote.id === '' ? String(new Date().getTime()) : props.data.editNote.id,
      name: props.data.editNote.id === '' ? "" : props.data.editNote.name,
      created: props.data.editNote.id === ''
         ? String(new Date().toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
         }))
         : props.data.editNote.created,
      category: props.data.editNote.id === '' ? "Task" : props.data.editNote.category,
      content: props.data.editNote.id === '' ? "" : props.data.editNote.content,
      dates: props.data.editNote.id === '' ? "" : props.data.editNote.dates
   })

   const createNewNote = () => {
      store.dispatch({ type: 'ADD_NOTE', payload: note })
      store.dispatch({ type: 'HIDE_MODAL' })
   }
   const editNote = () => {
      store.dispatch({ type: 'UPDATE_NOTE', payload: note })
      store.dispatch({ type: 'HIDE_MODAL' })
   }

   const hideModal = () => {
      store.dispatch({ type: 'HIDE_MODAL' })
   }

   const setTextAndParseDate = (str: any) => {
      var m = str.match(/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g)
      setNote({ ...note, content: str, dates: m ? m.join(", ") : "" })
   }

   return (
      <div className="modal">
         <form>
            <label>
               <p>Name Note</p>
               <input onChange={(e) => setNote({ ...note, name: e.target.value })} value={note.name} />
            </label>
            <label >
               <p>Category</p>
               <select onChange={(e) => setNote({ ...note, category: e.target.value })} value={note.category}>
                  <option value="Task">Task</option>
                  <option value="Random Thought">Random Thought</option>
                  <option value="Idea">Idea</option>
               </select>
            </label>
            <label>
               <p>Content Note</p>
               <textarea onChange={(e) => setTextAndParseDate(e.target.value)} value={note.content}></textarea>
            </label>
         </form>
         <button onClick={(store.getState().editMode) ? editNote : createNewNote}>OK</button>
         <button onClick={hideModal}>Cancel</button>
      </div >
   )
}

export default Modal