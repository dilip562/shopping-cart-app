import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>To Do App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        width: "100%",
        backgroundColor: "tomato",
        marginBottom: 20,
    },
    headerText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
});

export default Header;
