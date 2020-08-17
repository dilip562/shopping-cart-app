import React from "react";
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const AboutStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="About"
            component={About}
            options={({ navigation }) => ({
                headerTitle: () => (
                    <Header headerText="About" navigation={navigation} />
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
    </Stack.Navigator>
);

export default AboutStack;
