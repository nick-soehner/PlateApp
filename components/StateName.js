import React from "react";
import { Text, StyleSheet } from "react-native";

export class StateName extends React.Component {
    componentDidMount() {
        
    }

    render() {
        return <Text style={styles.text}>{this.props.place}</Text>;
    }
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        textTransform: "capitalize",
        fontSize: 30,
        margin: 5,
    },
});
