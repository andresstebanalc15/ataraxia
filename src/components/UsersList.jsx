import React from "react";
import { View, Text, FlatList } from "react-native";
import users from "../data/users";
import StyledText from "./StyledText";

const UserList = () => {
  return (
    <FlatList
      data={users}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: user }) => (
        <View>
          <StyledText color="primary" fontWeight="bold" fontSize="logo">
            Ataraxia
          </StyledText>
          <StyledText>Nombres: {user.names}</StyledText>
          <StyledText>Apellidos: {user.lastnames}</StyledText>
          <StyledText>Email: {user.email}</StyledText>
          <StyledText>Institución: {user.institution}</StyledText>
          <StyledText>Ocupación: {user.ocupation}</StyledText>
        </View>
      )}></FlatList>
  );
};

export default UserList;
