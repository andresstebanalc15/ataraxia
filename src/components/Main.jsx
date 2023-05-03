import React from "react"
import { Text, View } from "react-native"
import Constants from "expo-constants"
import UserList from "./UsersList";
const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}> 
      <UserList></UserList>
    </View>
  );
};

export default Main
