import React, {Component} from  'react'

import {Text, View, FlatList, ScrollView} from 'react-native'
import { connect } from 'react-redux' // to get acess to redux store
import ListItem from './listItem'

class LibraryList extends Component {

    renderItem({item}){
        return <ListItem library={item}/>
    }
    
    render(){

        return (
            <ScrollView>
                <FlatList 
                    data={this.props.dataToPass}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                    
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {

    return {dataToPass: state.libraries} 

    // i.e we return an object which we give any key and a value of LibraryReducer whose key is libraries(state.libraries)
    // we can now access the value of the any key inside the above object we returned in our component as a props 
}

export default connect(mapStateToProps)(LibraryList) //it calls the connect function which returns another function which then call the LibraryList

// the state argument in the mapStateToProps actually hold our application state in the reducer

/*  ideally, when we do store.getState(), it gives an object like
     {
         libraries: state in libraryReducer,
         anotherKey: state in another reducer,
         ..........: ......e.tc
    }
    
*/