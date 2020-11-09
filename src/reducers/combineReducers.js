import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    libraries: LibraryReducer,  // that is we will have a reducer called libraryReducer
    selectedLibrary: SelectionReducer 
})