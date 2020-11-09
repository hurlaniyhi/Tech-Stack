import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableWithoutFeedback, LayoutAnimation} from 'react-native'
import {connect} from 'react-redux'
import {CardSection} from './reusable'
import * as actions from '../actions'

class ListItem extends Component {

    UNSAFE_componentWillUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription(){

        const {library, expanded} = this.props
        if(expanded){
            return (
                <CardSection>
                    <Text style={styles.description}>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render(){
        const {titleStyle} = styles
        const { id, title } = this.props.library
        return (
            <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    description: {
        paddingLeft: 25,
        paddingRight: 10 
    }
})

const mapStateToProps = (state, ownProps) => { // ownProps i.e this.props of the component itself, i.e the props the component itself is expecting 
 
    const expanded = state.selectedLibrary === ownProps.library.id // it will yield to true or false
 
    return { expanded}
}

export default connect(mapStateToProps, actions)(ListItem) // the first argument is always mapStateToProps but if we dont need that 
// state data but want to have access to the redux action, we pass null instead of mapStateToProps. 
// we pass actions as the second parameter of connect so that whenever we call dispatch an action, it goes to the 
// right place (all reducers). so get access to dispatching actions using in our component using the
// action creators(function inside index.js in actions folder) we use this.props.actionFunctionName.