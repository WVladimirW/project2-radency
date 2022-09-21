import HeaderNotes from './Components/HeaderNotes'
import SummaryHeaderNotes from './Components/SummaryHeaderNotes'
import ItemNoteList from './Components/ItemNoteList'
import Modal from './Components/Modal'
import store from './store/state'
import { calculateSummaryList } from './helperFunctions/calculateSummaryList'
import { takeEventClick, showModal } from './helperFunctions/takeEventClick'

function App(props: any) {
  let active = props.store.getState().dataActive
  let archived = props.store.getState().dataArchived
  let summary = props.store.getState().summaryData
  calculateSummaryList(active, archived, summary)

  const activeData = () => {
    store.dispatch({ type: 'ACTIVE_NOTE' })
  }

  const archivedData = () => {
    store.dispatch({ type: 'ARCHIVED_NOTE' })
  }

  return (
    <div className="container">
      {props.store.getState().showModal
        ? <Modal data={props.store.getState()} />
        : null
      }

      <div className="notes-table" onClick={(e) => takeEventClick(e)}>
        <HeaderNotes />
        {props.store.getState().active
          ? <ItemNoteList data={props.store.getState().dataActive} />
          : <ItemNoteList data={props.store.getState().dataArchived} />
        }
      </div>
      <button id="active" onClick={activeData}>Show active note</button>
      <button id="archived" onClick={archivedData}>Show archived note</button>
      <button id="create-note" onClick={() => showModal()}>Create Note</button>
      <div className="summary-table">
        <SummaryHeaderNotes />
        <ItemNoteList data={props.store.getState().summaryData} />
      </div>
    </div>
  );
}

export default App;
