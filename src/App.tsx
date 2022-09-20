import React from 'react'
import HeaderNotes from './Components/HeaderNotes'
import SummaryHeaderNotes from './Components/SummaryHeaderNotes'
import ItemNoteList from './Components/ItemNoteList'
import { dataActive, dataArchived, summaryData } from './data'

function App() {
  return (
    <div className="container">
      <div className="notes-table">
        <HeaderNotes />
        <ItemNoteList data={dataActive} />
      </div>
      <button id="active">Show active note</button>
      <button id="archived">Show archived note</button>
      <button id="create-note">Create Note</button>
      <div className="summary-table">
        <SummaryHeaderNotes />
        <ItemNoteList data={summaryData} />
      </div>
    </div>
  );
}

export default App;
