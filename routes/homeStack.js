import React from "react";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerTintColor: "#444",
            headerStyle: {
                backgroundColor: "#eee",
            },
        }}
    >
        <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
                headerTitle: () => (
                    <Header headerText="Home" navigation={navigation} />
                ),
                headerBackground: () => (
                    <Image
                        source={require("../assets/game_bg.png")}
                        style={{
                            height: 50,
                            marginTop: StatusBar.currentHeight,
                        }}
                    />
                ),
            })}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
);

export default HomeStack;
