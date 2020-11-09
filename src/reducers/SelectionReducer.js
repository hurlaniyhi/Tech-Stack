export default (state = null, action) => { 
    // we initialize state to null so that reducer doesnt return undefined at the initial state.
    // ensure reducer never return undefined value
    switch (action.type) {
        case 'select_library':
            return action.payload;

        default: 
            return state
    }
   
}