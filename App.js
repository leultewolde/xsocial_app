import "react-native-gesture-handler";
import React from "react";

import { View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Feed from "./src/views/Feed";
import Thread from "./src/views/Thread";
import NewStatus from "./src/views/NewStatus";

import { Button } from "./src/components/Button";

const AppStack = createStackNavigator();
const ModalStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={Feed}
      options={({ navigation }) => ({
        headerTitle: "Home",
        headerRight: () => (
          <Button text="+" onPress={() => navigation.navigate("New Status")} />
        ),
      })}
    />
    <AppStack.Screen name="Thread" component={Thread} />
  </AppStack.Navigator>
);

const ModalNavigator = () => (
  <ModalStack.Navigator>
    <ModalStack.Screen
      name="App"
      component={AppNavigator}
      options={{ presentation: "modal", headerMode: "none" }}
    />
    <ModalStack.Screen
      name="New Status"
      component={NewStatus}
      options={{ presentation: "modal", headerMode: "none" }}
    />
  </ModalStack.Navigator>
);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <ModalNavigator />
      </NavigationContainer>
    </View>
  );
}
