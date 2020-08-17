import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text>About</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default About;
