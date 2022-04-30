import React from "react";
import IMAGES from "../images";
import { Image, StyleSheet } from "react-native";

export class StatePlate extends React.Component {
    render() {
        return (
            <Image
                style={styles.plate}
                source={IMAGES[this.props.place]}
            />
        );
    }
}

const styles = StyleSheet.create({
    plate: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "black",
        width: 250,
        height: 125,
        resizeMode: 'contain',
    },
});
