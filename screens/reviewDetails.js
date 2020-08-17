import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles, image } from "../styles/global";
import Card from "../shared/card";

const ReviewDetails = ({ route, navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={image.rating[route.params.rating]} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
});

export default ReviewDetails;
