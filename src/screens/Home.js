import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Provider} from 'react-redux' 
// provider enables data inside the store to be available anywhere in our app,
// it allows communication between react and redux
import {createStore} from 'redux'
import reducers from '../reducers/combineReducers'
import { Header } from '../components/reusable'
import LibraryList from '../components/libraryList'

const Home = () => {

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Provider store={createStore(reducers)}> 
        <View>
          <Header headerText="Tech Stack"/>
          <LibraryList />
        </View>
      </Provider>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});


Home.navigationOptions = () => {
  return{
    headerShown: false
  }
}
export default Home;
