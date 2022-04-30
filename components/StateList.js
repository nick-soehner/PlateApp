import React from "react";
import { StateName } from "./StateName";
import { StatePlate } from "./StatePlate";
import { STATES } from "../data";
import { StyleSheet, View, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class StateList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stateList: [],
            foundItems: [],
        };

        this.handleClick = this.handleClick.bind(this);
        this.storeData = this.storeData.bind(this);
        this.removeData = this.removeData.bind(this);
        this.getAllKeys = this.getAllKeys.bind(this);
    }

    componentDidMount() {
        this.setStateList();
        this.getAllKeys();
    }

    setStateList() {
        const states = Object.values(STATES);
        this.setState({ stateList: states });
    }

    getAllKeys = async () => {
        let keys = [];
        try {
            keys = await AsyncStorage.getAllKeys();
        } catch (e) {
            console.log("getAllKeys Error");
        }

        this.setState({ foundItems: keys });
        console.log(this.state.foundItems);
    };

    storeData = async (value) => {
        try {
            await AsyncStorage.setItem(value, "found");
        } catch (e) {
            console.log(e);
        }
    };

    removeData = async (value) => {
        try {
            await AsyncStorage.removeItem(value);
        } catch (e) {
            console.log(e);
        }
    };

    handleClick(e) {
        if (this.state.foundItems.includes(e)) {
            console.log(`${e} is found!`);
            this.removeData(e);
        } else {
            console.log(`${e} not found!`);
            this.storeData(e);
        }

        this.getAllKeys();
    }

    render() {
        return (
            <View style={styles.stateWrapper}>
                {this.state.stateList.map((state, key) => {
                    return (
                        <Pressable
                            onPress={() => this.handleClick(state)}
                            style={[
                                styles.pressable,
                                {
                                    backgroundColor:
                                        this.state.foundItems.includes(state)
                                            ? "green"
                                            : "#f5f5f5",
                                },
                            ]}
                        >
                            <View
                                key={key}
                                datakey={state}
                                style={styles.stateContainer}
                                id={state}
                            >
                                <StateName place={state} />
                                <StatePlate place={state} />
                            </View>
                        </Pressable>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stateWrapper: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    stateContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
    },
    pressable: {
        width: "95%",
        borderRadius: 10,
        margin: 10,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 25,
    },
});
