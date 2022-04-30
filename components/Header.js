import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import IMAGES from "../images";

export class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text>header</Text>
                <Image source={IMAGES["logo"]} style={styles.logo} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        backgroundColor: "#f5f5f5",
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 2,
        shadowColor: "black",
        shadowOffset: { height: 2 },
        shadowOpacity: 100,
    },
    logo: {
        width: 70,
        resizeMode: "contain",
    },
});