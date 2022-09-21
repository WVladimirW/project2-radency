import store from '../store/state'
import { DataType } from '../store/reducers/Reducer'

export const showModal = () => {
   store.dispatch({ type: 'SHOW_MODAL' })
}
export const editModal = (note: DataType) => {
   console.log(store.getState())
   store.dispatch({ type: 'EDIT_NOTE', payload: note })
}

const archivedNote = (note: DataType) => {
   store.dispatch({ type: 'BE_ARCHIVED_NOTE', payload: note })
}
const activeNote = (note: DataType) => {
   store.dispatch({ type: 'BE_ACTIVE_NOTE', payload: note })
}

const ArchivedAllActiveNotes = () => {
   store.dispatch({ type: 'BE_ARCHIVED_ALL_NOTES' })
}
const ActiveAllArchivedNotes = () => {
   store.dispatch({ type: 'BE_ACTIVE_ALL_NOTES' })
}

const deleteActiveNote = (note: DataType) => {
   store.dispatch({ type: 'DELETE_ACTIVE_NOTE', payload: note })
}

const deleteArchivedNote = (note: DataType) => {
   store.dispatch({ type: 'DELETE_ARCHIVED_NOTE', payload: note })
}

const deleteAllActiveNotes = () => {
   store.dispatch({ type: 'DELETE_ALL_ACTIVE_NOTES' })
}
const deleteAllArchivedNotes = () => {
   store.dispatch({ type: 'DELETE_ALL_ARCHIVED_NOTES' })
}

export const takeEventClick = (e: any) => {
   if (e.target.className === 'icon-edit') {
      let editNote = store.getState().dataActive.filter((item) => item.id === e.target.id)[0]
      editModal(editNote)
   }
   if (e.target.className === 'header-icon-archive') {
      if (store.getState().active) {
         ArchivedAllActiveNotes()
      } else {
         ActiveAllArchivedNotes()
      }
   }
   if (e.target.className === 'icon-archive') {
      if (store.getState().active) {
         let newDataActive = store.getState().dataActive.filter((item) => item.id === e.target.id)[0]
         archivedNote({ ...newDataActive })
      } else {
         let newDataArchived = store.getState().dataArchived.filter((item) => item.id === e.target.id)[0]
         activeNote({ ...newDataArchived })
      }
   }
   if (e.target.className === 'icon-delete') {
      if (store.getState().active) {
         let newDataActive = store.getState().dataActive.filter((item) => item.id === e.target.id)[0]
         deleteActiveNote({ ...newDataActive })
      } else {
         let newDataArchived = store.getState().dataArchived.filter((item) => item.id === e.target.id)[0]
         deleteArchivedNote({ ...newDataArchived })
      }
   }
   if (e.target.className === 'header-icon-delete') {
      if (store.getState().active) {
         deleteAllActiveNotes()
      } else {
         deleteAllArchivedNotes()
      }
   }
}