export interface DataType {
   id: string,
   name: string,
   created: string,
   category: string,
   content: string,
   dates?: string
}

export interface summaryDataType {
   category: string,
   active: number,
   archived: number
}

export interface InitialState {
   dataActive: Array<DataType>,
   dataArchived: Array<DataType>,
   summaryData: Array<summaryDataType>,
   active: boolean,
   showModal: boolean,
   editNote: DataType,
   editMode: boolean
}

export interface StateAction {
   type: string,
   payload: DataType
}

export let initialState: InitialState = {
   dataActive: [
      {
         id: "1",
         name: "Shopping list",
         created: "April 20, 2021",
         category: "Task",
         content: "Tomatoes, bread",
         dates: ""
      },
      {
         id: "2",
         name: "The theory of evolut...",
         created: "April 27, 2021",
         category: "Random Thought",
         content: "The evolution...",
         dates: ""
      },
      {
         id: "3",
         name: "New Feature",
         created: "May 05, 2021",
         category: "Idea",
         content: "Implement new...",
         dates: "3/5/2021, 5/5/2021"
      },
      {
         id: "4",
         name: "Create function",
         created: "May 13,2021",
         category: "Task",
         content: "function can use...",
         dates: ""
      },
      {
         id: "5",
         name: "Books",
         created: "May 15,2021",
         category: "Task",
         content: "The Lean Startup",
         dates: ""
      },
      {
         id: "6",
         name: "Bug fix",
         created: "May 18,2021",
         category: "Idea",
         content: "Implement data storage",
         dates: ""
      },
      {
         id: "7",
         name: "Books",
         created: "May 23,2021",
         category: "Task",
         content: "The Lean Startup",
         dates: ""
      }
   ],
   dataArchived: [
      {
         id: "8",
         name: "Shopping list",
         created: "April 20, 2021",
         category: "Task",
         content: "Tomatoes, bread",
         dates: ""
      },
      {
         id: "9",
         name: "The theory of evolut...",
         created: "April 27, 2021",
         category: "Random Thought",
         content: "The evolution...",
         dates: ""
      }
   ],
   summaryData: [
      {
         category: "Task",
         active: 13,
         archived: 4
      },
      {
         category: "Random Thought",
         active: 7,
         archived: 12
      },
      {
         category: "Idea",
         active: 4,
         archived: 6
      }
   ],
   active: true,
   showModal: false,
   editNote: {
      id: "",
      name: "",
      created: "",
      category: "",
      content: "",
      dates: ""
   },
   editMode: false
}

export function reducer(state: InitialState = initialState, action: StateAction | any): InitialState {
   switch (action.type) {
      case 'ADD_NOTE':
         return { ...state, dataActive: [...state.dataActive, action.payload] }
      case 'ACTIVE_NOTE':
         return { ...state, active: true }
      case 'ARCHIVED_NOTE':
         return { ...state, active: false }
      case 'SHOW_MODAL':
         return { ...state, showModal: true }
      case 'HIDE_MODAL':
         return { ...state, showModal: false, editMode: false }
      case 'EDIT_NOTE':
         return { ...state, editNote: action.payload, showModal: true, editMode: true }
      case 'UPDATE_NOTE':
         return {
            ...state,
            dataActive: state.dataActive.map((item) => {
               if (item.id == action.payload.id) return action.payload
               else return item
            }),
            showModal: false,
            editMode: false,
            editNote: { id: "", name: "", created: "", category: "", content: "", dates: "" }
         }
      case 'BE_ARCHIVED_NOTE':
         return {
            ...state,
            dataActive: state.dataActive.filter((item) => item.id !== action.payload.id),
            dataArchived: [...state.dataArchived, action.payload]
         }
      case 'BE_ARCHIVED_ALL_NOTES':
         return {
            ...state,
            dataArchived: [...state.dataArchived, ...state.dataActive],
            dataActive: []
         }
      case 'BE_ACTIVE_NOTE':
         console.log(action.payload)
         return {
            ...state,
            dataArchived: state.dataArchived.filter((item) => item.id !== action.payload.id),
            dataActive: [...state.dataActive, action.payload]
         }
      case 'BE_ACTIVE_ALL_NOTES':
         return {
            ...state,
            dataActive: [...state.dataActive, ...state.dataArchived],
            dataArchived: []
         }
      case 'DELETE_ACTIVE_NOTE':
         return { ...state, dataActive: state.dataActive.filter((item) => item.id !== action.payload.id) }
      case 'DELETE_ALL_ACTIVE_NOTES':
         return { ...state, dataActive: [] }
      case 'DELETE_ARCHIVED_NOTE':
         return { ...state, dataArchived: state.dataArchived.filter((item) => item.id !== action.payload.id) }
      case 'DELETE_ALL_ARCHIVED_NOTES':
         return { ...state, dataArchived: [] }
      default:
         return state
   }
}